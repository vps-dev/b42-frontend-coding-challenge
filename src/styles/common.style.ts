import {StyleSheet} from 'react-native';

import colors from './colors';

export default StyleSheet.create({
  title: {
    fontSize: 48,
    color: colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 20,
    color: colors.text,
  },
  view: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: 20,
    flex: 1,
  },
});
