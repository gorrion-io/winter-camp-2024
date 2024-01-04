import { CrewMember } from "@/types/crewMember";

type CrewTableProps = {
  crew: CrewMember[];
};

const CrewTable = ({ crew }: CrewTableProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-md">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="text-gray-400">
          <tr>
            <th className="py-2">Full Name</th>
            <th className="py-2">Age</th>
            <th className="py-2">Nationality</th>
            <th className="py-2">Occupation</th>
          </tr>
        </thead>
        <tbody className="text-gray-300 divide-y divide-gray-700 text-center">
          {crew.map((member, i) => (
            <tr key={i}>
              <td className="py-2">{member.fullName}</td>
              <td className="py-2">{member.age}</td>
              <td className="py-2">{member.nationality}</td>
              <td className="py-2">{member.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrewTable;
