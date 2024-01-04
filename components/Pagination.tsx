import { useRouter } from "next/router";

type PaginationProps = {
  totalItems: number;
};

const Pagination = ({ totalItems }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / 8);
  const router = useRouter();
  const currentPage = Number(router.query.page);

  const handlePageChange = (page: number) => {
    router.push(`/task/${page}`);
  };

  return (
    <div className="mt-4 flex justify-center">
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-600 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring focus:border-blue-300 disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(totalPages).fill(undefined)].map((x, page) => (
          <button
            key={page + 1}
            onClick={() => handlePageChange(page + 1)}
            className={`relative inline-flex items-center px-4 py-2 border-t border-b border-r border-gray-600 ${
              currentPage === page + 1
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring focus:border-blue-300"
            }`}
          >
            {page + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-600 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring focus:border-blue-300 disabled:opacity-50"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
