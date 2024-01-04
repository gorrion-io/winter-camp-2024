import useSWR from "swr";
import { useRouter } from "next/router";
import Card from "@/components/Card/Card";
import astronautPng from "@/assets/images/astronaut.png"
import Image from "next/image";

type AstronautParams = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
}

type CatsParams = {
  height: number
  id: string
  url:string
  width:number
}

const fetcher = (url: string, options?: RequestInit) => fetch(url, options).then(res => res.json());
export default function Task() {
  const router = useRouter();
  const { page } = router.query;
  const apiUrl = page ? `/api/crew?page=${page}` : null
  const catsApiUrl = page ? `https://api.thecatapi.com/v1/images/search?limit=8&width=200&page=${page}` : null

  const { data } = useSWR<{ astronauts: AstronautParams[] }>(apiUrl, fetcher);
  const catsObject = useSWR< CatsParams[]>(catsApiUrl, fetcher);

  const cats= catsObject && catsObject.data ? catsObject.data : []

  const handlePagination = (nextPage: number) => {
    if (!page) {
      return 1;
    }

    const currentPage = typeof page === "string" ? parseInt(page) : 1;
    const newPage = currentPage + nextPage;

    if (newPage <= 0) {
      return 1;
    }

    if (data && data.astronauts.length < 8 && nextPage > 0) {
      return currentPage;
    }

    return newPage;
  };

  return (
      <div className="max-w-3xl mx-auto mt-8 p-4">
        <div className="flex justify-between items-center mb-4">
          <button
              className="hover:bg-blue-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-19213C"
              onClick={() => router.push(`/task/${handlePagination(-1)}`)}
          >
            Prev
          </button>

          <div className=" flex-col text-center rounded-md flex items-center h-16 w-36 sm:w-63 bg-19213C justify-center relative overflow-hidden">
          <div className="font-bold text-2xl">Astronauts<Image src={astronautPng} alt={"astronaut"} className={"hidden sm:block rounded-md absolute top-0 left-0 h-20 w-auto"}></Image></div>
          {/*I hold both commercial and copyright rights to this photograph*/}
          </div>
          <button
              className="hover:bg-blue-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-19213C"
              onClick={() => router.push(`/task/${handlePagination(1)}`)}
          >
            Next
          </button>
        </div>

        <div>
          <div className="text-md text-center"> {(data && data.astronauts.length === 0 ) && (<p>There are no more astronauts</p>)}</div>
          {data && !catsObject.isLoading &&
              data.astronauts.map((astronaut, index) => (
                  <Card
                      key={index}
                      image={cats && cats[index] ? cats[index].url : "https://cdn2.thecatapi.com/images/a7i.jpg"}
                      fullName={astronaut.fullName}
                      nationality={astronaut.nationality}
                      age={astronaut.age}
                      profession={astronaut.profession}
                  />
              ))}
        </div>


      </div>
  );
}
