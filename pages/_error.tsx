import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';

interface Props {
  statusCode?: number;
  message?: string;
}

const Error: NextPage<Props> = ({ statusCode, message }) => {
  return (
    <div className='flex min-h-[100svh] flex-col place-content-center place-items-center p-24'>
      <div className='flex flex-col space-y-2 place-items-center'>
        <h1 className='text-4xl font-bold text-center'>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
        {message && <p>{message}</p>}
      </div>
      <div className='flex place-items-center mt-12'>
        <Link href='/'>Go home</Link>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, message: err?.message };
};

export default Error;
