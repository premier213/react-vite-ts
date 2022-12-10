import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CheckIcon from "./icons/check";
import XIcon from "./icons/x";
import { DataType } from "./list/card";
import Button from "./ui/button";
import empty from "../assets/download.jpeg";

export const Details = () => {
  const [detailsData, setDetailsData] = useState<
    DataType["itemsData"] | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);

  let { userId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/data/${userId}`)
      .then((res) => {
        if (res.ok) {
          setIsLoading(false);
          return res.json();
        } else {
          setIsLoading(false);
          throw new Error();
        }
      })
      .then((data) => setDetailsData(data))
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col mx-auto justify-center bg-slate-100 w-1/4 my-12 py-12 px-8 gap-8">
      {isLoading && "loading ..."}
      {!isLoading && detailsData && (
        <>
          {/* name */}
          <div className="flex gap-8 justify-between">
            <span>Name:</span>
            <p>{detailsData.name}</p>
            <div className="flex gap-4">
              <button>
                <CheckIcon width="16" />
              </button>
              <button>
                <XIcon width="16" />
              </button>
            </div>
          </div>
          {/* family */}
          <div className="flex gap-8 justify-between">
            <span>Family:</span>
            <p>{detailsData.family}</p>
            <div className="flex gap-4">
              <button>
                <CheckIcon width="16" />
              </button>
              <button>
                <XIcon width="16" />
              </button>
            </div>
          </div>
          {/* mobile */}
          <div className="flex gap-8 justify-between">
            <span>Mobile:</span>
            <p>{detailsData.mobile}</p>
            <div className="flex gap-4">
              <button>
                <CheckIcon width="16" />
              </button>
              <button>
                <XIcon width="16" />
              </button>
            </div>
          </div>
          {/* id */}
          <div className="flex gap-8 justify-between">
            <span>Id No:</span>
            <p>{detailsData.id}</p>
            <div className="flex gap-4">
              <button>
                <CheckIcon width="16" />
              </button>
              <button>
                <XIcon width="16" />
              </button>
            </div>
          </div>
          {/* birthDate */}
          <div className="flex gap-8 justify-between">
            <span>Birth Date:</span>
            <p>{detailsData.birthdate}</p>
            <div className="flex gap-4">
              <button>
                <CheckIcon width="16" />
              </button>
              <button>
                <XIcon width="16" />
              </button>
            </div>
          </div>
          {/* Address */}
          <div className="flex gap-8 justify-between">
            <span>Address:</span>
            <p>{detailsData.address}</p>
            <div className="flex gap-4">
              <button>
                <CheckIcon width="16" />
              </button>
              <button>
                <XIcon width="16" />
              </button>
            </div>
          </div>
          {/* avatar */}
          <div className="flex gap-8 justify-between">
            <span>Avatar:</span>
            {typeof detailsData.avatar === "string" &&
            detailsData.avatar !== "" ? (
              <img
                src={`${detailsData.avatar}`}
                alt={detailsData.name}
                height="150px"
                width="300px"
              />
            ) : (
              <img
                src={`${empty}`}
                alt={detailsData.name}
                height="150px"
                width="300px"
              />
            )}
            <div className="flex gap-4">
              <button>
                <CheckIcon width="16" />
              </button>
              <button>
                <XIcon width="16" />
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="danger">
              <Link to="/">Back</Link>
            </Button>
            <Button variant="success">Save</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
