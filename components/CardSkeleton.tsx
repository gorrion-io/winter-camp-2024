import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <main className="m-4 mt-20">
      <ul className="flex gap-4 flex-wrap justify-center items-center">
        {Array(8)
          .fill(0)
          .map((_, idx) => (
            <li
              key={idx}
              className="border-2 rounded-md p-4 min-w-64 w-1/5 shadow-white shadow-md"
            >
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton count={4} className="bg-slate-800" />
              </SkeletonTheme>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default CardSkeleton;
