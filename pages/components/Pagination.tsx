import { PaginationProps } from '@/types/propsTypes'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Pagination = ({ lastPage, firstPage, totalPages }: PaginationProps) => {
  const router = useRouter()
  const page = router.query.page ? Number(router.query.page) : 1

  return (
    <footer className="mb-4 flex h-fit items-center justify-center gap-2">
      <button
        className="flex items-center gap-2 rounded-md bg-blue-400 px-3 py-2 text-xs text-black duration-300 hover:scale-105 hover:bg-blue-500 active:scale-110 active:bg-blue-600 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-blue-400 disabled:active:scale-100 disabled:active:bg-blue-400 sm:text-sm md:text-base"
        disabled={firstPage}
        onClick={() => {
          router.push(`/task/${page - 1}`)
        }}
      >
        <span className="h-3 w-2 md:h-4 md:w-[10px]">
          <Image
            src="/previousArrow.svg"
            width={10}
            height={16}
            alt="Arrow previous"
          />
        </span>
        Previous
      </button>
      <div className="text-sm font-medium sm:text-base">
        {page} / {totalPages}
      </div>
      <button
        className="flex items-center gap-2 rounded-md bg-blue-400 px-3 py-2 text-xs text-black duration-300 hover:scale-105 hover:bg-blue-500 active:scale-110 active:bg-blue-600 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-blue-400 disabled:active:scale-100 disabled:active:bg-blue-400 sm:text-sm md:text-base"
        disabled={lastPage}
        onClick={() => {
          router.push(`/task/${page + 1}`)
        }}
      >
        Next
        <span className="h-3 w-2 md:h-4 md:w-[10px]">
          <Image src="/nextArrow.svg" width={10} height={16} alt="Arrow next" />
        </span>
      </button>
    </footer>
  )
}

export default Pagination
