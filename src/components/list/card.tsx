import { FC } from "react";
import { Link } from "react-router-dom";
import EditIcon from "../icons/edit";
import TagIcon from "../icons/tag";
import empty from "../../assets/download.jpeg";

export interface DataType {
  itemsData: {
    id: string;
    name: string;
    family: string;
    address: string;
    avatar: string;
    password: string;
    birthdate: string;
    mobile: string;
  };
}

export const Card: FC<DataType> = (props) => {
  const { itemsData } = props;

  return (
    <div className="w-full border border-slate-400 bg-slate-200 flex rounded-md py-4 my-4 justify-between">
      <div className="mx-2">
        {typeof itemsData.avatar === "string" && itemsData.avatar !== "" ? (
          <img
            src={`${itemsData.avatar}`}
            alt={itemsData.name}
            height="150px"
            width="300px"
          />
        ) : (
          <img
            src={`${empty}`}
            alt={itemsData.name}
            height="150px"
            width="300px"
          />
        )}
      </div>
      <div className="w-full">
        {/* checkbox & edit */}
        <div className="flex gap-2 px-2 justify-end">
          <div>
            <button>
              <EditIcon width="16" height="16" />
            </button>
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </div>
        {/* details */}
        <div className="flex flex-col w-full gap-2">
          <div>
            <span className="text-slate-500 pr-12">Name:</span> {itemsData.name}
          </div>
          <div>
            <span className="text-slate-500 pr-12">Family:</span>{" "}
            {itemsData.family}
          </div>
          <div>
            <span className="text-slate-500 pr-4">Birth date:</span>{" "}
            {itemsData.birthdate}
          </div>
          <div>
            <span className="text-slate-500 pr-12">ID No:</span> {itemsData.id}
          </div>
        </div>
        {/* footer details */}
        <div className="flex justify-between ">
          <button>
            <TagIcon width="16" />
          </button>
          <button className="mx-2 bg-emerald-400 rounded-md w-24">
            <Link
              to={itemsData.id}
              className="mx-2 bg-emerald-400 rounded-md w-24"
            >
              check
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
