import {StyleSheet} from 'react-native';

import colors from '../../../../styles/colors';

export default StyleSheet.create({
  label: {
    position: 'absolute',
    left: 5,
    top: 5,
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    textTransform: 'uppercase',
    fontSize: 10,
  },
  container: {
    backgroundColor: colors.secondary,
    marginBottom: 20,
    height: 120,
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
  },
  imgContainer: {
    width: 150,
    maxWidth: '40%',
  },
  iconContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  icon: {
    position: 'absolute',
    left: '50%',
    marginLeft: -25,
  },
  image: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  contentTitle: {
    color: colors.text,
    fontSize: 24,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
