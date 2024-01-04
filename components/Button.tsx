import Link from "next/link";
import React from "react";

const Button = (props: { pageNumber: number; label: string }) => {
  let urlValue = "";
  switch (props.label) {
    case "Next":
      urlValue = `${props.pageNumber + 1}`;
      break;
    case "Previous":
      urlValue = `${props.pageNumber - 1}`;
      break;
    default:
      urlValue = `1`;
      break;
  }

  return (
    <Link
      className="border-2 rounded-md p-2 min-w-20 text-center hover:text-black hover:bg-white hover:bg-opacity-70 hover:border-black"
      href={`/task/${urlValue}`}
    >
      {props.label}
    </Link>
  );
};

export default Button;
