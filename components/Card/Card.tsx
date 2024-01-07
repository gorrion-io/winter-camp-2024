import { CrewMember } from "@/lib/types/crewTypes";
import { UserIcon } from "@heroicons/react/24/outline";

export function Card(props: { memberData: CrewMember }) {
  const { memberData } = props;
  return (
    <div className="np-effect  rounded-md">
      <div className="flex flex-col rounded-t-md justify-center items-center gap-2 pt-4 bg-gradient-to-br from-[#2b4055] to-[#334c65]">
        <UserIcon className="h-24 md:h-28 border-8 border-[#30475e] rounded-full p-2 shadow-[9px_9px_18px_rgb(41,60,80),_-9px_-9px_18px_rgb(55,82,108),inset_6px_6px_12px_rgb(25,38,50),inset_-6px_-6px_12px_rgb(71,104,138)]" />
        <h3 className="text-xl text-[#F05454] uppercase w-full text-center font-bold">
          {memberData.fullName}
        </h3>
      </div>

      <div className="p-4">
        <p>
          <b>Age:</b> {memberData.age}
        </p>
        <p>
          <b>Nationality:</b> {memberData.nationality}
        </p>
        <p>
          <b>Profession:</b> {memberData.profession}
        </p>
      </div>
    </div>
  );
}
