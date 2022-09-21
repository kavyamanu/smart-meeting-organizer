import { useQuery, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Layout from "./Layout";
import { GET_BUILDING, ADD_MEETING } from "../utils/queries";
import { useState } from "react";

export const SelectRoom = ({ data }) => {
  const [meetingRoomId, setMeetingRoomId] = useState();
  const { title, date, startTime, endTime } = data;
  const buildingQuery = useQuery(GET_BUILDING, {
    variables: { id: parseInt(data.building) },
  });
  const [addMeeting, { loading, error }] = useMutation(ADD_MEETING);

  const createMeeting = () => {
    addMeeting({
      variables: {
        id: Math.floor(Math.random() * 1000), // TODO: ideally should be generated by backend
        title,
        date,
        startTime,
        endTime,
        meetingRoomId,
      },
    });
  };

  return (
    <Layout additionalTitle="New Meeting">
      <h2>Please select one of the free rooms</h2>
      <div className="space-y-8 divide-y divide-gray-200 p-5">
        {buildingQuery.data?.Building.meetingRooms.map((meetingRoom) => {
          return (
            <div
              key={meetingRoom.id}
              className="bg-indigo-500 shadow-lg shadow-indigo-500/50"
              onClick={() => setMeetingRoomId(meetingRoom.id)}
            >
              {meetingRoom.name}
              building {buildingQuery.data?.Building.name}
              floor {meetingRoom.floor}
            </div>
          );
        })}

        <div className="py-5 flex justify-center">
          <button
            disabled={!meetingRoomId || loading}
            onClick={createMeeting}
            type="button"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Meeting
          </button>
        </div>
      </div>
    </Layout>
  );
};