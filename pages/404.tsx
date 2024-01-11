export default function notFound() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="my-5">
          <h1 className="font-bold text-5xl">404 - Lost in Space</h1>
        </div>
        <div className="w-5/12">
          <p className="text-xl text-center">
            Oops! The page you are searching for seems to have drifted off into
            the cosmic unknown. It is lost in space, far beyond our digital
            galaxy.
          </p>
        </div>
      </div>
    </>
  );
}
