import styles from "../styles/pagination.module.css";
import { useFetch } from "../context/FetchProvider";

const FIRST_LAST_NUMBER_PAGINATION = 2;
const RANGE_NUMBER_PAGINATION = 4;

type PaginationRangeNumbersProps = {
  handlePageChange: (page: number) => void;
};

export default function PaginationRangeNumbers({
  handlePageChange,
}: PaginationRangeNumbersProps) {
  const { rangeNumberPagination, data, pageNumber } = useFetch();

  return (
    <>
      {rangeNumberPagination.length > 0 &&
      rangeNumberPagination[0] > FIRST_LAST_NUMBER_PAGINATION ? (
        <li>
          <a
            href="#"
            className={styles.navigationNumber}
            onClick={() =>
              handlePageChange(
                rangeNumberPagination[0] - RANGE_NUMBER_PAGINATION > 0
                  ? rangeNumberPagination[0] - RANGE_NUMBER_PAGINATION
                  : 1
              )
            }
          >
            ...
          </a>
        </li>
      ) : (
        ""
      )}
      <>
        {rangeNumberPagination.map((numberPage: number) => (
          <li key={numberPage}>
            <a
              href="#"
              className={`${styles.navigationNumber} ${
                numberPage === pageNumber
                  ? `${styles.navigationNumberDark}`
                  : ""
              }`}
              onClick={() => handlePageChange(numberPage)}
            >
              {numberPage}
            </a>
          </li>
        ))}
      </>
      {rangeNumberPagination.length > 0 &&
      rangeNumberPagination[rangeNumberPagination.length - 1] + 1 <
        data.pages ? (
        <li>
          <a
            href="#"
            className={styles.navigationNumber}
            onClick={() =>
              handlePageChange(
                rangeNumberPagination[rangeNumberPagination.length - 1] + 1
              )
            }
          >
            ...
          </a>
        </li>
      ) : (
        ""
      )}
    </>
  );
}
