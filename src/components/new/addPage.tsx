import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/button";
import Input from "../ui/input";
import uploadFileImage from "../../assets/download.jpeg";
import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { formReducer, initialInput } from "../../utils/formData";

export const AddPage = () => {
  const [input, dispatch] = useReducer(formReducer, initialInput);
  const navigate = useNavigate();

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    }).then((res) => {
      if (res.ok) {
        dispatch({ type: "RESET" });
        navigate("/");
      }
    });
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "HANDLE_INPUT_CHANGE",
      field: event.target.name,
      payload: event.target.value,
    });
  };
  return (
    <form onSubmit={submitForm}>
      <div className="flex flex-col mx-auto justify-center bg-slate-100 w-1/4 my-12 py-12 px-8 gap-8">
        <div className="flex gap-4">
          <label className="mt-3">Name:</label>
          <Input
            placeholder="Name"
            onChange={handleChangeInput}
            name="name"
            value={input.name}
          />
        </div>
        <div className="flex gap-4">
          <label className="mt-3">Family:</label>
          <Input
            placeholder="Family"
            onChange={handleChangeInput}
            name="family"
            value={input.family}
          />
        </div>
        <div className="flex gap-4">
          <label className="mt-3">Mobile:</label>
          <Input
            placeholder="Mobile"
            onChange={handleChangeInput}
            name="mobile"
            value={input.mobile}
          />
        </div>
        <div className="flex gap-4">
          <label className="mt-3">Birth Date:</label>
          <Input
            placeholder="Birth Date"
            onChange={handleChangeInput}
            name="birthDate"
            value={input.birthDate}
          />
        </div>
        <div className="flex gap-4">
          <label className="mt-3">Address:</label>
          <Input
            placeholder="Address"
            onChange={handleChangeInput}
            name="address"
            value={input.address}
          />
        </div>
        <div className="flex gap-4">
          <label className="mt-3">Avatar:</label>
          <label htmlFor="file-input">
            <img src={uploadFileImage} />
          </label>
          <input
            type="file"
            id="file-input"
            className="hidden"
            name="avatar"
            onChange={handleChangeInput}
          />
        </div>
        <div className="flex justify-end my-4">
          <Button variant="danger">
            <Link to="/">Back</Link>
          </Button>
          <Button variant="success" type="submit">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddPage;
