import {useQuery} from '@apollo/client';
import {WORKOUTS} from '../../../graphql/queries';
import {Workout} from '../../../config/model';

export default function useGetWorkouts() {
  const {loading, data} = useQuery<{workouts: Workout[]}>(WORKOUTS);

  return {loading, workouts: data?.workouts};
}
