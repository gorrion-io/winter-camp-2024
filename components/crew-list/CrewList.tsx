import { CrewCard } from '@/components/crew-list/CrewCard';

interface CrewListProps {
  crew: CrewMember[];
}

export const CrewList = ({ crew }: CrewListProps) => {
  return (
    <div className='w-11/12 lg:w-2/3 xl:w-1/2 flex flex-wrap items-center justify-around gap-2 grow overflow-y-auto py-4'>
      {crew.map((member, i) => (
        <CrewCard key={i} {...member} />
      ))}
    </div>
  );
};
