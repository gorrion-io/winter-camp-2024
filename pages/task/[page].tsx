import { useEffect } from 'react'
import Pagination from '../components/Pagination'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'
import { useQuery, useQueryClient } from 'react-query'
import { getCrew } from '@/lib/getCrew'
import CrewCard from '../components/CrewCard'
import Custom404 from '../404'
import Loader from '../components/Loader'

export default function Task() {
  const router = useRouter()
  const page = router.query.page ? Number(router.query.page) : 1
  const queryClient = useQueryClient()

  const { isLoading, data, isError } = useQuery(
    ['crewMembers', { page }],
    getCrew
  )

  useEffect(() => {
    if (page < (data?.totalPages as number))
      queryClient.prefetchQuery(['crewMembers', { page: page + 1 }], getCrew)
  }, [page, queryClient, data?.totalPages])

  return (
    <>
      {isError && <Custom404 />}
      {isLoading && <Loader title="Loading..." />}
      {!isError && !isLoading && (
        <>
          <div className="grid min-h-screen items-end justify-center">
            <main className="grid h-fit w-screen grid-cols-2 gap-3 px-3 py-40 sm:px-4 sm:py-0 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:gap-7">
              {data?.pagedCrewMembers.map(
                ({ fullName, nationality, age, profession }) => (
                  <CrewCard
                    age={age}
                    fullName={fullName}
                    nationality={nationality}
                    profession={profession}
                    key={uuid()}
                  />
                )
              )}
            </main>
            <Pagination
              totalPages={data?.totalPages as number}
              firstPage={page === 1}
              lastPage={page === data?.totalPages}
            />
          </div>
        </>
      )}
    </>
  )
}
