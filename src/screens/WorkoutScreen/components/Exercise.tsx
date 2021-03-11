import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../../../styles/colors';
import styles from './Exercise.style';

type ExerciseProps = {
  name: string;
};

const Exercise: FC<ExerciseProps> = ({name}) => {
  return (
    <View style={styles.listItem}>
      <Icon name="caretright" size={20} color={colors.primary} />
      <Text key={name} style={styles.listItemText}>
        {name}
      </Text>
    </View>
  );
};

export default Exercise;
