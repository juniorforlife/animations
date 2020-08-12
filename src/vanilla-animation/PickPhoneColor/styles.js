import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  image: {
    width: '75%',
    height: '75%',
    zIndex: 100,
    resizeMode: 'contain'
  },
  imageMask: {
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH,
    borderRadius: WINDOW_WIDTH / 2,
    position: 'absolute'
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  cell: {
    flexBasis: '25%',
    alignItems: 'center',
    marginVertical: 16
  },
  colorOption: {
    width: 32,
    height: 32,
    borderRadius: 16,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 2, height: 1},
    marginBottom: 8
  },
  hightlighted: {
    fontWeight: '500'
  }
});
