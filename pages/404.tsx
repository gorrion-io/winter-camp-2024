import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='flex min-h-[100svh] flex-col place-content-center place-items-center p-24'>
      <div className='flex place-items-center'>
        <h1 className='text-4xl font-bold text-center'>404 - Page Not Found</h1>
      </div>
      <div className='flex place-items-center mt-12'>
        <Link href='/'>Go home</Link>
      </div>
    </div>
  );
}
