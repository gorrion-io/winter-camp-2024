import { CrewMember } from '@/types/apiDataTypes'

const CrewCard = ({ fullName, nationality, age, profession }: CrewMember) => {
  return (
    <section className="grid gap-2 rounded-lg bg-white p-2 sm:p-3 xl:p-4">
      {!!fullName && (
        <p className="text-sm sm:text-base lg:text-xl xl:text-2xl">
          Name: {fullName}
        </p>
      )}
      {!!age && (
        <p className="text-sm sm:text-base lg:text-xl xl:text-2xl">
          Age: {age}
        </p>
      )}
      {!!nationality && (
        <p className="text-sm sm:text-base lg:text-xl xl:text-2xl">
          Nationality: {nationality}
        </p>
      )}
      {!!profession && (
        <p className="text-sm sm:text-base lg:text-xl xl:text-2xl">
          Profession: {profession.charAt(0).toUpperCase()}
          {profession.slice(1)}
        </p>
      )}
    </section>
  )
}

export default CrewCard
