import Link from "next/link";
import { Data } from "../api/crew";

interface PaginationProps {
    currentPage: number;
    data: Data;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, data}) => {
    const renderPagination = (data: Data) => {
        const pages = [];
        for (let i = 1; i <= data.totalPages; i++) {
          pages.push(
            <Link legacyBehavior key={i} href={`/task/${i}`} passHref>
              <a
                className={`mx-1 px-3 py-1 rounded ${
                  i === currentPage ? "bg-blue-700 text-white" : "bg-white"
                }`}
              >
                {i}
              </a>
            </Link>
          );
        }
        return (
          <div className="flex justify-center items-center py-5 mt-auto">
            {pages}
          </div>
        );
      };

    return (
        <div className="flex justify-center items-center py-5 mt-auto">
        {currentPage > 1 && (
          <>
            <Link legacyBehavior href={`/task/1`} passHref>
              <a className="bg-blue-600 text-white mx-2 px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-bold">
                First
              </a>
            </Link>
            <Link
              legacyBehavior
              href={`/task/${currentPage - 1}`}
              passHref
            >
              <a className="bg-blue-600 text-white mx-2 px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-bold">
                Previous
              </a>
            </Link>
          </>
        )}
        {renderPagination(data)}
        {currentPage < data.totalPages && (
          <>
            <Link
              legacyBehavior
              href={`/task/${currentPage + 1}`}
              passHref
            >
              <a className="bg-blue-600 text-white mx-2 px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-bold">
                Next
              </a>
            </Link>
            <Link
              legacyBehavior
              href={`/task/${data.totalPages}`}
              passHref
            >
              <a className="bg-blue-600 text-white mx-2 px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-bold">
                Last
              </a>
            </Link>
          </>
        )}
      </div> 
    )
}

export default Pagination;