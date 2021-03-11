import React, {FC} from 'react';
import {SafeAreaView, Text, Image, View, ScrollView} from 'react-native';
import {useReactiveVar} from '@apollo/client';
import {useGetNavigator} from '../../navigation/navigation';
import Button from '../../components/Button/Button';
import ExerciseComponent from './components/Exercise';
import {workoutVar} from '../../config/cache';

import {Exercise} from '../../config/model';

import commonStyles from '../../styles/common.style';
import styles from './WorkoutScreen.style';

const WorkoutScreen: FC = () => {
  const workout = useReactiveVar(workoutVar);
  const navigate = useGetNavigator();

  const renderExercise = ({name}: Exercise) => (
    <ExerciseComponent key={name} name={name} />
  );

  const startWorkout = () => {
    navigate('Exercise', {title: workout.name});
  };

  return (
    <SafeAreaView style={commonStyles.view}>
      <Image source={workout?.coverImage} style={styles.image} />

      <ScrollView style={commonStyles.content}>
        <Text style={commonStyles.title}>{workout?.name}</Text>

        <Text style={commonStyles.subTitle}>Exercises:</Text>

        {workout?.exercises?.map(renderExercise)}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}
          disabled={!workout?.exercises?.length}
          onPress={startWorkout}>
          Start workout
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutScreen;
