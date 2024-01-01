import { LoaderProps } from '@/types/propsTypes'
import Image from 'next/image'

const Loader = ({ title }: LoaderProps) => (
  <div className="grid min-h-screen items-center justify-center">
    <main className="grid justify-items-center gap-4 md:gap-8">
      <h1 className="text-4xl font-semibold lg:text-5xl xl:text-6xl">
        {title}
      </h1>
      <span className="h-24 w-24 md:h-32 md:w-32">
        <Image
          src="/spinner.svg"
          width={128}
          height={128}
          alt="Icon spinner"
          className="animate-spin"
        />
      </span>
    </main>
  </div>
)

export default Loader
