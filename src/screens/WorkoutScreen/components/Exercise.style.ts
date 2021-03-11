import {StyleSheet} from 'react-native';

import colors from '../../../styles/colors';

export default StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 25,
  },
  listItemText: {
    fontSize: 18,
    lineHeight: 20,
    color: colors.text,
    marginLeft: 10,
  },
});
