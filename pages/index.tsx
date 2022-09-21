import { Dashboard } from "../components/Dashboard";
import Layout from "../components/Layout";
import { useQuery, gql } from "@apollo/client";
import {
  GET_BUILDINGS,
  GET_MEETING_ROOMS,
  GET_MEETINGS,
} from "../utils/queries";

const IndexPage = () => {
  const buildingsQuery = useQuery(GET_BUILDINGS);
  const meetingRoomsQuery = useQuery(GET_MEETING_ROOMS);
  const meetingsQuery = useQuery(GET_MEETINGS);

  if (
    buildingsQuery.loading ||
    meetingRoomsQuery.loading ||
    meetingsQuery.loading
  )
    return <p>Loading...</p>;

  return (
    <Layout title="Home">
      <Dashboard
        buildings={buildingsQuery.data.Buildings}
        meetingRooms={meetingRoomsQuery.data.MeetingRooms}
        meetings={meetingsQuery.data.Meetings}
      />
    </Layout>
  );
};

export default IndexPage;
