import Link from "next/link";

//keep all this in utils
const getAvailableRoomCount = (meetingRooms) => {
  //todo;
  return 3;
};
const getOnGoingMeetingCount = (meetingRooms) => {
  //todo;
  return 3;
};

export const Dashboard = ({ buildings, meetingRooms, meetings }) => {
  return (
    <div>
      <div className="mt-6 flow-root divide-y-2 w-10">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Buildings</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            Total {buildings.length}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Rooms</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            Total {buildings.length} <br />
            Free Now {getAvailableRoomCount(meetingRooms)}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Meetings</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">
            Total {meetings.length} Today <br />
            Total {getOnGoingMeetingCount(meetingRooms)} going on now
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Link href="/new-meeting">
          <a className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Add a meeting
          </a>
        </Link>
      </div>
    </div>
  );
};
