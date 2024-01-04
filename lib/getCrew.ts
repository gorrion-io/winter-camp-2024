import { ApiResponse } from '@/types/apiDataTypes'
import { wait } from './wait'

export const getCrew = async ({ queryKey }: any) => {
  await wait(500)

  const [, { page }] = queryKey

  const res = await fetch(`/api/crew?page=${page}`)

  if (!res.ok) throw new Error(res.statusText)

  const data = (await res.json()) as ApiResponse

  return data
}
