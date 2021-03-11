import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
    width: 'auto',
    borderRadius: 5,
  },
  containerDisabled: {
    backgroundColor: '#404040',
  },
  containerWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  containerIconLeft: {
    flexDirection: 'row-reverse',
  },
  text: {
    color: colors.textInverted,
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
  },
  textDisabled: {
    color: colors.textDisabled,
  },
  icon: {
    lineHeight: 20,
    color: colors.textInverted,
    marginLeft: 8,
  },
  iconLeft: {
    marginLeft: 0,
    marginRight: 8,
  },
  iconDisabled: {
    color: colors.textDisabled,
  },
});
