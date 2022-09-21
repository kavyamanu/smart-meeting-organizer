import { gql } from "@apollo/client";

export const GET_BUILDINGS = gql`
  {
    Buildings {
      name
      id
    }
  }
`;

export const GET_MEETING_ROOMS = gql`
  {
    MeetingRooms {
      id
      name
      floor
      building {
        name
        id
      }
      meetings {
        date
        startTime
        endTime
      }
    }
  }
`;
export const GET_MEETINGS = gql`
  {
    Meetings {
      title
      id
      date
      startTime
      endTime
    }
  }
`;

export const GET_BUILDING = gql`
  query ToggleTodo($id: Int!) {
    Building(id: $id) {
      name
      id
      meetingRooms {
        id
        floor
        name
        meetings {
          date
          startTime
          endTime
        }
      }
    }
  }
`;

export const ADD_MEETING = gql`
  mutation AddMeeting(
    $id: Int!
    $title: String!
    $date: String!
    $startTime: String!
    $endTime: String!
    $meetingRoomId: Int!
  ) {
    Meeting(
      id: $id
      title: $title
      date: $date
      startTime: $startTime
      endTime: $endTime
      meetingRoomId: $meetingRoomId
    ) {
      title
    }
  }
`;
