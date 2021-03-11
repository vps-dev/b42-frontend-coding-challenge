import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';

import colors from '../../styles/colors';
import styles from './Loader.style';

const Loader: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loader;
