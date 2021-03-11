import {gql} from '@apollo/client';

export const WORKOUT = gql`
  query {
    workout @client
  }
`;

export const WORKOUTS = gql`
  query {
    workouts {
      id
      name
      exercises {
        name
        instruction
        image {
          uri
        }
        video {
          uri
        }
      }
      coverImage {
        uri
      }
      finished @client
    }
  }
`;

export const FINISHED_WORKOUTS = gql`
  query {
    finishedWorkouts {
      id
    }
  }
`;
