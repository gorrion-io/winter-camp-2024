import Link from "next/link";

interface PaginationLinksProps {
  page: number;
  totalPages: number;
}

const createDots = () => {
  return (
    <span key="dots" className="mx-2 px-4 pt-2 pb-8 text-xl text-gray-500">
      ...
    </span>
  );
};

const createPageLink = (pageNumber: number, page: number) => (
  <Link
    key={pageNumber}
    href={`/task/${pageNumber}`}
    className={`mx-4 px-4 pt-2 pb-8 text-xl ${
      page === pageNumber ? "text-white" : "text-gray-500"
    }`}
  >
    {pageNumber}
  </Link>
);

export const PaginationLinks = ({ page, totalPages }: PaginationLinksProps) => {
  const links = [];

  // the first page
  links.push(createPageLink(1, page));

  if (totalPages >= 3) {
    if (page > 3) {
      links.push(createDots());
    }
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPages - 1, page + 1);
      i++
    ) {
      links.push(createPageLink(i, page));
    }

    if (page < totalPages - 2) {
      links.push(createDots());
    }
  }

  // the last page
  if (totalPages > 1) links.push(createPageLink(totalPages, page));

  return links;
};
