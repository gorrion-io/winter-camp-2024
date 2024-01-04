import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = { text: string };

const ErrorAlert = ({ text }: Props) => {
  return (
    <div className="flex w-full items-center gap-4 rounded bg-red-600/20 p-3 sm:w-fit">
      <FontAwesomeIcon className="text-red-500" icon={faExclamationCircle} />
      {text}
    </div>
  );
};

export default ErrorAlert;
