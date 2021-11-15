import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const COLOR = '#545658';

export default StyleSheet.create({
  buttonLight: {
    backgroundColor: 'tomato',
    color: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 25,
    margin: 10,
  },
  buttonDark: {
    backgroundColor: '#010101',
    borderRadius: 25,
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'tomato',
    color: 'tomato',
  },
  link: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  city: {
    fontSize: 36,
    fontWeight: '500',
    color: COLOR,
  },
  today: {
    fontSize: 24,
    fontWeight: '300',
    color: COLOR,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  temp: {
    fontSize: 80,
    fontWeight: 'bold',
    color: COLOR,
  },
  description: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR,
  },
});
