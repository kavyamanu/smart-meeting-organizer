import { useQuery } from "@tanstack/react-query";

export const Dashboard = () => {
  // const buildingsQuery = useQuery(["buildings"], getTodos);

  return (
    <div>
      <div className="mt-6 flow-root divide-y-2 w-10">
        <div className="relative focus-within:ring-2 focus-within:ring-indigo-500 p-2">
          <h3 className="text-sm font-semibold text-gray-800">
            <a href="#" className="hover:underline focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              Buildings
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">Total 4</p>
        </div>

        <div className="relative focus-within:ring-2 focus-within:ring-indigo-500 p-2">
          <h3 className="text-sm font-semibold text-gray-800">
            <a href="#" className="hover:underline focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              Rooms
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            Total 20 <br />
            Free Now 5
          </p>
        </div>
        <div className="relative focus-within:ring-2 focus-within:ring-indigo-500 p-2">
          <h3 className="text-sm font-semibold text-gray-800">
            <a href="#" className="hover:underline focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              Meetings
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            Total 100 Today <br />
            Total 10 going on now
          </p>
        </div>
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Add a meeting
        </a>
      </div>
    </div>
  );
};
