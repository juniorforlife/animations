import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  deck: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    zIndex: 100
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
  text: {
    position: 'absolute',
    fontSize: 32,
    fontWeight: 'bold',
    top: 50,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8
  },
  likeText: {
    color: '#32CD32',
    borderColor: '#32CD32',
    left: 50
  },
  nopeText: {
    color: 'red',
    borderColor: 'red',
    right: 50
  }
});
