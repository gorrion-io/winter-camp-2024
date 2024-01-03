import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Link from 'next/link';
import { CrewMember } from '@/lib/crew';
import { Data } from '../api/crew';

const fetchCrew = async (page: number): Promise<Data> => {
  const { data } = await axios.get(`/api/crew?page=${page}`);
  return data;
};

const CrewPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const currentPage = parseInt(page as string, 10) || 1;

  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: ['crew', currentPage],
    queryFn: () => fetchCrew(currentPage),
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading crew data</div>;

  // Upewnij się, że data jest zdefiniowane przed użyciem
  const crewMembers = data?.crew ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <div className="page-container">
      <header className="header">
        <h1>Crew Members</h1>
      </header>
      <div className="crew-container">
      {data.crew.map((member, index) => (
      <div key={member.fullName + index} className="crew-card">
        <h3>{member.fullName}</h3>
        <p>Nationality: {member.nationality}</p>
        <p>Age: {member.age}</p>
        <p>Profession: {member.profession}</p>
      </div>

      ))}
      </div>
      <div className="pagination">
      {currentPage > 1 && (
          <Link legacyBehavior href={`/task/${currentPage - 1}`} className='pagination-button'>
            <a className='pagination-button'>Previous</a>
          </Link>
        )}
        {currentPage < data.totalPages && (
          <Link legacyBehavior href={`/task/${currentPage + 1}`} className="pagination-button">
            <a className='pagination-button'>Next</a>
          </Link>
        )}
      </div>
      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: linear-gradient(135deg, #e9ecef, #dee2e6);
        }
        .header {
          text-align: center;
          padding: 20px 0;
          background-color: #0070f3;
          color: white;
          margin-bottom: 20px;
        }
        .header h1 {
          margin: 0;
          font-size: 2rem;
        }
        .crew-container {
          flex-grow: 1;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          padding: 20px;
          gap: 20px;
        }
        .crew-card {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 20px;
          width: 250px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .crew-card h3 {
          color: #0070f3;
          font-size: 1.5rem;
          margin: 0 0 10px;
        }
        .crew-card p {
          margin: 5px 0;
        }
        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 0;
            margin-top: auto
          }
        .pagination-button {
            background-color: blue;
            color: #fff;
            margin: 0 10px;
            padding: 10px 15px;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s ease-in-out;
            font-weight: bold;
          }
        .pagination-button:hover,
        .pagination-button:focus {
            background-color: #0056b3;
            outline: none;
          }
        .pagination-button:disabled,
        .pagination-button[aria-disabled='true'] {
            background-color: #cccccc;
            pointer-events: none;
          }
      `}</style>
    </div>
  );
};

export default CrewPage;