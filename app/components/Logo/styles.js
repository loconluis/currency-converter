import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImages: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  image: {
    width: imageWidth / 2,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    color: '$white',
    marginTop: 15,
  },
});

export default styles;
