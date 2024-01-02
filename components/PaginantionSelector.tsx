import { useRouter } from "next/router";
import { useFetch } from "../context/FetchProvider";
import styles from "../styles/pagination.module.css";

const ELEMENTS_ON_PAGE = [2, 4, 6, 8, 10];
const FIRST_PAGE = 1;

export default function PaginationSelector() {
  const { data, pageNumber, setPageNumber, pageSize, setPageSize } = useFetch();

  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    if (
      newPage >= FIRST_PAGE &&
      newPage <= data.pages &&
      newPage !== pageNumber
    ) {
      setPageNumber(newPage);
      router.push(`/task/${newPage}`);
    }
  };

  function handleChangeElementsOnSite(elementsOnPage: number) {
    handlePageChange(FIRST_PAGE);
    setPageSize(elementsOnPage);
  }

  return (
    <>
      <label className={styles.labelNumber}>Select page size:</label>
      <select
        className={styles.navigationNumber}
        onChange={(e) => handleChangeElementsOnSite(Number(e.target.value))}
        value={pageSize}
        defaultValue={pageSize}
      >
        {ELEMENTS_ON_PAGE.map((elementsOnPage: number) => (
          <option key={elementsOnPage} value={elementsOnPage}>
            {elementsOnPage}
          </option>
        ))}
      </select>
    </>
  );
}
