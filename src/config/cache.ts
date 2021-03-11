import {InMemoryCache, makeVar} from '@apollo/client';
import {Workout} from './model';

export const workoutVar = makeVar<Workout>({} as Workout);
export const finishedWorkoutsVar = makeVar<Workout[]>([]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        workout: {
          read() {
            return workoutVar();
          },
        },
      },
    },
    Workout: {
      fields: {
        finished: {
          read(_, {readField}) {
            const workoutId = readField('id');
            const isFinished = finishedWorkoutsVar()?.some(
              ({id}) => workoutId === id,
            );
            return isFinished;
          },
        },
      },
    },
  },
});
