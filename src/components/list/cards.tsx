import { useEffect, useState } from "react";
import Card from "./card";
import { v4 } from "uuid";

export const Cards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/data")
      .then((res) => {
        if (res.ok) {
          setIsLoading(false);
          return res.json();
        } else {
          setIsLoading(false);
          throw new Error();
        }
      })
      .then((data) => setData(data))
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div className="px-4">
      {isLoading
        ? "loading ..."
        : data.map((item) => {
            return <Card key={v4()} itemsData={item} />;
          })}
    </div>
  );
};

export default Cards;
