import { Link } from "react-router-dom";
import Button from "../ui/button";

export const AddUser = () => {
  return (
    <div className="flex justify-end px-2">
      <Button variant="success" rounded="full">
        <Link to="/add">+</Link>
      </Button>
    </div>
  );
};

export default AddUser;
