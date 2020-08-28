import {StyleSheet} from 'react-native';

import {WINDOW_WIDTH, WINDOW_HEIGHT} from '../../utils';

export const PROFILE_IMG_SIZE = WINDOW_WIDTH / 3;
export const COVER_IMG_HEIGHT = WINDOW_HEIGHT / 4;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: WINDOW_WIDTH * 0.15,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#183153'
  },
  coverImg: {
    height: COVER_IMG_HEIGHT,
    width: '100%',
    position: 'absolute',
    zIndex: 100
  },
  profileImg: {
    position: 'absolute',
    zIndex: 999,
    width: PROFILE_IMG_SIZE,
    height: PROFILE_IMG_SIZE,
    borderWidth: 1,
    borderColor: 'white'
  },
  postList: {
    flex: 1,
    paddingTop: COVER_IMG_HEIGHT
  },
  postContainer: {
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: 'red',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    margin: 16
  }
});
