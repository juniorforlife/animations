import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  popover: {
    position: 'absolute',
    bottom: 0,
    elevation: 10,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  draggableArea: {
    width: 100,
    height: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: 'white'
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: '#d3d3d3',
    borderRadius: 10
  }
});
