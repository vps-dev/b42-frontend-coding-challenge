import React, {FC, useState} from 'react';
import {SafeAreaView, Text, Image, View, ScrollView, Alert} from 'react-native';
import Video from 'react-native-video';
import {useMutation, useReactiveVar} from '@apollo/client';
import {useGetNavigator} from '../../navigation/navigation';
import {FINISH_WORKOUT} from '../../graphql/mutations';
import {finishedWorkoutsVar, workoutVar} from '../../config/cache';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';

import commonStyles from '../../styles/common.style';
import styles from './ExerciseScreen.style';

const ExerciseScreen: FC = () => {
  const navigate = useGetNavigator();
  const workout = useReactiveVar(workoutVar);
  const finishedWorkouts = useReactiveVar(finishedWorkoutsVar);
  const [finishWorkoutAction] = useMutation(FINISH_WORKOUT);

  const [exerciseIndex, setExerciseIndex] = useState<number>(0);
  const [isVideoLoading, setVideoLoading] = useState<boolean>(true);

  const currentExercise = workout.exercises[exerciseIndex];
  const isLast = exerciseIndex === workout.exercises.length - 1;
  const isFirst = exerciseIndex === 0;

  const finishWorkout = () => {
    finishWorkoutAction({variables: {id: workout.id}}).then(
      ({data: {finishWorkout: finishedWorkout}}) => {
        finishedWorkoutsVar([...finishedWorkouts, finishedWorkout]);
        Alert.alert('Workout was succesfully finished!', '', [
          {text: 'Got it!', onPress: () => navigate('Home')},
        ]);
      },
    );
  };

  const nextExercise = () => {
    if (!isLast) {
      setExerciseIndex(exerciseIndex + 1);
    }
  };

  const prevExercise = () => {
    if (!isFirst) {
      setExerciseIndex(exerciseIndex - 1);
    }
  };

  return (
    <SafeAreaView style={commonStyles.view}>
      <View style={styles.mediaContainer}>
        {currentExercise?.video && (
          <Video
            key={currentExercise.name}
            controls
            paused
            source={{uri: encodeURI(currentExercise.video.uri)}}
            style={styles.media}
            resizeMode="cover"
            posterResizeMode="cover"
            onLoadStart={() => setVideoLoading(true)}
            onLoad={() => setVideoLoading(false)}
          />
        )}

        {isVideoLoading && <Loader />}

        {!currentExercise?.video && currentExercise?.image && (
          <Image source={currentExercise.image} style={styles.media} />
        )}
      </View>

      <ScrollView style={commonStyles.content}>
        <Text style={styles.title}>
          Exercise {exerciseIndex + 1}: {currentExercise.name}
        </Text>

        <Text style={commonStyles.subTitle}>Description:</Text>

        <Text style={styles.text}>{currentExercise.instruction}</Text>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <Button
          icon="left"
          iconPosition="left"
          disabled={isFirst}
          onPress={prevExercise}>
          Previous
        </Button>

        {isLast ? (
          <Button onPress={finishWorkout}>Finish Workout</Button>
        ) : (
          <Button onPress={nextExercise} icon="right">
            Next
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ExerciseScreen;
