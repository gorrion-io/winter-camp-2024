import { useState } from "react";
import { useRouter } from "next/router";
import { CircularBtn } from "../Button/CircularBtn";
import { PrevNextBtn } from "../Button/PrevNextBtn";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function CircularPagination(props: {
  totalPages: number;
  activePage: number;
}) {
  const router = useRouter();
  const indexArr: number[] = [];
  const { totalPages, activePage } = props;

  const [active, setActive] = useState<number>(activePage);

  const handlePagination = (index: number) => {
    router.push(`/task/${index}`);
    setActive(index);
  };

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
    router.push(`/task/${active + 1}`);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
    router.push(`/task/${active - 1}`);
  };

  function pushIndexToArr() {
    if (totalPages) {
      for (let index = 1; index <= totalPages; index++) {
        indexArr.push(index);
      }
    }
  }
  pushIndexToArr();

  return (
    <div className="flex justify-center place-self-center items-center gap-4">
      <PrevNextBtn variant="prev" activePage={active} navigationFn={prev}>
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </PrevNextBtn>

      <div className="hidden md:flex items-center gap-4 ">
        {indexArr.map((index: number) => (
          <CircularBtn
            key={index}
            indexBtn={index}
            activePage={active}
            handlePagination={handlePagination}
          />
        ))}
      </div>

      <PrevNextBtn
        variant="next"
        activePage={active}
        navigationFn={next}
        totalPages={totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </PrevNextBtn>
    </div>
  );
}
