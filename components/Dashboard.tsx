import Link from "next/link";

//todo: keep all this in utils
const getAvailableRoomCount = (meetingRooms) => {
  //todo;
  return 3;
};
const getOnGoingMeetingCount = (meetingRooms) => {
  //todo;
  return 4;
};

export const Dashboard = ({ buildings, meetingRooms, meetings }) => {
  return (
    <div>
      <div>
        <div className="mt-6 space-y-6">
          <div>
            <h2 className="text-base font-semibold text-gray-800">Buildings</h2>
            <p className="mt-1 text-base text-gray-600 line-clamp-2">
              Total {buildings.length}
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-800">Rooms</h2>
            <p className="mt-1 text-base text-gray-600 line-clamp-2">
              Total {meetingRooms.length} <br />
              Free Now {getAvailableRoomCount(meetingRooms)}
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-800">Meetings</h2>
            <p className="mt-1 text-base text-gray-600 line-clamp-2">
              Total {meetings.length} Today <br />
              Total {getOnGoingMeetingCount(meetingRooms)} going on now
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/new-meeting">
            <a className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Add a meeting
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
