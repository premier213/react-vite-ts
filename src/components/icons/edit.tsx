import { SVGProps } from "react";

function EditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#2c3e50"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className="icon icon-tabler icon-tabler-pencil"
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M4 20h4L18.5 9.5a1.5 1.5 0 00-4-4L4 16v4"></path>
      <path d="M13.5 6.5L17.5 10.5"></path>
    </svg>
  );
}

export default EditIcon;
