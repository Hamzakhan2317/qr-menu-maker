"use client";

const Error = () => {
  return (
    <div className="flex h-[85vh] items-center justify-center">
      <div className="my-auto flex flex-wrap items-center justify-center space-x-3 text-lg md:text-2xl font-bold">
        <p className="text-center">
          <span className="mr-2">Opps!</span>
          Something went wrong.
        </p>
        <button onClick={() => window.location.reload(false)}>Retry</button>
      </div>
    </div>
  );
};

export default Error;
