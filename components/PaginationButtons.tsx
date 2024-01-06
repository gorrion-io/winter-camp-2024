import { useRouter } from "next/router";
import React from "react";

interface PaginationButtonProps {
  pageCount: number;
  pageNumber: number;
}

const PaginationButtons = ({
  pageCount,
  pageNumber,
}: PaginationButtonProps) => {
  const router = useRouter();
  const buttons = [];

  for (let i = 0; i < pageCount; i++) {
    buttons.push(
      <button
        key={i + 1}
        className={`join-item btn ${pageNumber === i + 1 ? "btn-active" : ""}`}
        onClick={() => router.push(`/task/${i + 1}`)}
      >
        {i + 1}
      </button>
    );
  }

  return <div className="my-8 join">{buttons}</div>;
};

export default PaginationButtons;
