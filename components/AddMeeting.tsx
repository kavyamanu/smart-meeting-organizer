import { useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Layout from "../components/Layout";
import { GET_BUILDINGS } from "../utils/queries";

const schema = yup
  .object({
    title: yup.string().required("Meeting title is required"),
    date: yup.date().required("Date is required"),
    startTime: yup.string().required("Start Time is required"),
    endTime: yup.string().required("End Time is required"),
    building: yup.string().required("Select a building"),
  })
  .required();

export const AddMeeting = ({ onNext }) => {
  const buildingsQuery = useQuery(GET_BUILDINGS);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => onNext(data);

  return (
    <Layout additionalTitle="New Meeting">
      <form
        className="space-y-8 divide-y divide-gray-200 p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-6 sm:space-y-5">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                {...register("title")}
                type="text"
                className={cn(
                  "block w-full rounded-md focus:outline-none sm:text-sm focus:border-indigo-500 focus:ring-indigo-500",
                  errors.title &&
                    "border-red-300  text-red-900 placeholder-red-300 focus:border-red-500  focus:ring-red-500"
                )}
                placeholder="Enter meeting description"
                aria-invalid={!!errors.title}
              />
            </div>
            {errors.title && (
              <p className="mt-2 text-red-600 text-sm ">
                {errors.title?.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-6 sm:space-y-5">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                {...register("date")}
                type="date"
                className={cn(
                  "block w-full rounded-md focus:outline-none sm:text-sm focus:border-indigo-500 focus:ring-indigo-500",
                  errors.date &&
                    "border-red-300  text-red-900 placeholder-red-300 focus:border-red-500  focus:ring-red-500"
                )}
                placeholder="dd/mm/yy"
                aria-invalid={!!errors.date}
              />
            </div>
            {errors.date && (
              <p className="mt-2 text-red-600 text-sm ">
                {errors.date?.message}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-6 sm:space-y-5">
          <div>
            <label
              htmlFor="startTime"
              className="block text-sm font-medium text-gray-700"
            >
              Start Time
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                {...register("startTime")}
                type="time"
                className={cn(
                  "block w-full rounded-md focus:outline-none sm:text-sm focus:border-indigo-500 focus:ring-indigo-500",
                  errors.startTime &&
                    "border-red-300  text-red-900 placeholder-red-300 focus:border-red-500  focus:ring-red-500"
                )}
                aria-invalid={!!errors.startTime}
              />
            </div>
            {errors.startTime && (
              <p className="mt-2 text-red-600 text-sm ">
                {errors.startTime?.message}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-6 sm:space-y-5">
          <div>
            <label
              htmlFor="endTime"
              className="block text-sm font-medium text-gray-700"
            >
              End Time
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                {...register("endTime")}
                type="time"
                className={cn(
                  "block w-full rounded-md focus:outline-none sm:text-sm focus:border-indigo-500 focus:ring-indigo-500",
                  errors.endTime &&
                    "border-red-300  text-red-900 placeholder-red-300 focus:border-red-500  focus:ring-red-500"
                )}
                aria-invalid={!!errors.endTime}
              />
            </div>
            {errors.endTime && (
              <p className="mt-2 text-red-600 text-sm ">
                {errors.endTime?.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="building"
            className="block text-sm font-medium text-gray-700"
          >
            Building
          </label>
          <select
            {...register("building")}
            id="building"
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {buildingsQuery.data?.Buildings.map((building) => {
              return (
                <option key={building.id} value={building.id}>
                  {building.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="py-5 flex justify-center">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
};
