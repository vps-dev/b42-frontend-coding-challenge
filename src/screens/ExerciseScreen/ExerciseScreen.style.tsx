import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  media: {
    width: '100%',
    height: '100%',
  },
  mediaContainer: {
    height: 200,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: colors.text,
    fontSize: 16,
  },
});
