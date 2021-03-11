import React, {FC} from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useGetNavigator} from '../../../../navigation/navigation';
import Button from '../../../../components/Button/Button';
import {workoutVar} from '../../../../config/cache';

import {Workout} from '../../../../config/model';

import colors from '../../../../styles/colors';
import styles from './WorkoutCard.style';

type CardProps = {
  workout: Workout;
};

const WorkoutCard: FC<CardProps> = ({workout}) => {
  const {coverImage, name, finished} = workout;
  const navigate = useGetNavigator();

  const selectWorkout = () => {
    workoutVar(workout);
    navigate('Workout', {title: name});
  };

  const btnTitle = finished ? 'Restart workout' : 'Start workout';

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={coverImage} />

        {finished && (
          <View style={styles.iconContainer}>
            <Icon
              name="check"
              style={styles.icon}
              size={40}
              color={colors.primary}
            />
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>{name}</Text>

        <View style={styles.buttonContainer}>
          <Button onPress={selectWorkout} icon="right">
            {btnTitle}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default WorkoutCard;
