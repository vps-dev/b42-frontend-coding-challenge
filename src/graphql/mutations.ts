import {gql} from '@apollo/client';

export const FINISH_WORKOUT = gql`
  mutation($id: String!) {
    finishWorkout(id: $id) {
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
    }
  }
`;
