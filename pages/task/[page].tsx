/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { CrewMember } from '@/lib/crew';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const entriesOnSinglePage = 8;
export default function Task() {
  const [page, setPage] = useState(0);
  const { data, status } = useQuery<CrewMember[]>({
    queryKey: ['crew', page],
    queryFn: async () => {
      const response = await fetch(`/api/crew`, {
        method: 'GET',
        headers: {
          page: page.toString(),
          entriesonpage: JSON.stringify(entriesOnSinglePage),
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
    refetchOnWindowFocus: false,
  });

  const handlePrev = () => {
    if (page <= 0) return;
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    // tutaj jest jeszcze data na ostatniej stronie przeciez wiec tak nie sprawdzę czy koniec
    // trzeba sprawdzic na endpoincie (brak czasu)
    if (!data) return;
    setPage((prev) => prev + 1);
  };
  return (
    <div>
      <button
        className='"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">'
        onClick={handlePrev}
      >
        Prev
      </button>
      {status === 'pending' || !data ? (
        <h2>Loading...</h2>
      ) : (
        data.map((crewMember) => {
          return (
            <div key={crypto.randomUUID()} className="m-2 border-2 border-solid border-black ">
              <h2>{crewMember.fullName}</h2>
              <p>{crewMember.nationality}</p>
              <p>{crewMember.age}</p>
              <p>{crewMember.profession}</p>
            </div>
          );
        })
      )}
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
