interface CrewParagraphProps {
  desc: string;
  value: string;
}

const CrewParagraph = ({ value, desc }: CrewParagraphProps) => (
  <p className="space-x-2">
    <span className="font-extrabold">{desc}</span>
    <span>{value}</span>
  </p>
);

export const CrewCard = ({
  fullName,
  age,
  nationality,
  profession,
}: CrewMember) => {
  return (
    <section className="relative hover:scale-105 cursor-default transition-transform flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-black to-gray-900 text-white shadow-white/30 shadow w-full max-w-[20rem] p-8">
      <CrewParagraph desc="Full Name:" value={fullName} />
      <CrewParagraph desc="Age:" value={age.toString()} />
      <CrewParagraph desc="Nationality:" value={nationality} />
      <CrewParagraph desc="Profession:" value={profession} />
    </section>
  );
};
