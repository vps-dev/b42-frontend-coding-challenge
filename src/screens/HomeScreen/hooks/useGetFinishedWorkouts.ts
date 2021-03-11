import {useQuery} from '@apollo/client';
import {FINISHED_WORKOUTS} from '../../../graphql/queries';
import {Workout} from '../../../config/model';

export default function useGetFinishedWorkouts() {
  const {loading, data} = useQuery<{finishedWorkouts: Workout[]}>(
    FINISHED_WORKOUTS,
  );

  return {loading, finishedWorkouts: data?.finishedWorkouts};
}
