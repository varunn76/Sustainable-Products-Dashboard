const ErrorPage = ({ message = "Something went wrong!", retry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <svg
        className="w-16 h-16 text-red-600 mb-4 animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728"
        />
      </svg>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Oops!</h1>
      <p className="text-gray-600 mb-4">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorPage;
