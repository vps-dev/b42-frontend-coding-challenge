import React, {FC, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Card from './components/WorkoutCard/WorkoutCard';
import Loader from '../../components/Loader/Loader';
import {finishedWorkoutsVar} from '../../config/cache';
import {Workout} from '../../config/model';
import useGetFinishedWorkouts from './hooks/useGetFinishedWorkouts';
import useGetWorkouts from './hooks/useGetWorkouts';

import commonStyles from '../../styles/common.style';
const HomeScreen: FC = () => {
  const {loading, workouts} = useGetWorkouts();
  const {finishedWorkouts} = useGetFinishedWorkouts();

  useEffect(() => {
    finishedWorkoutsVar(finishedWorkouts);
  }, [finishedWorkouts]);

  const renderWorkout = (workout: Workout) => (
    <Card key={workout.id} workout={workout} />
  );

  const sortByFinished = (a: Workout, b: Workout): number =>
    Number(a.finished) - Number(b.finished);

  return (
    <SafeAreaView style={commonStyles.view}>
      <Text style={commonStyles.title}>Workouts</Text>
      {loading && <Loader />}
      {!loading && workouts && (
        <ScrollView style={commonStyles.content}>
          {[...workouts].sort(sortByFinished).map(renderWorkout)}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
