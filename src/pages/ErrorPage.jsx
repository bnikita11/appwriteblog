import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-lg mt-4">Sorry, an unexpected error has occurred.</p>
      <p className="mt-2 text-gray-500">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
