import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  AnimatedList,
  DraggableBottomSheet,
  SwipeDeck,
  ZoomableImage,
  SwipeableList,
  PickPhoneColor,
  CubeCarousel
} from '../vanilla-animation';
import {WINDOW_WIDTH, WINDOW_HEIGHT} from '../utils';
import users from '../data/usersData';
import dummyData from '../data/dummyData';

export {default as HomeScreen} from './HomeScreen';

export const AnimatedListScreen = () => {
  return <AnimatedList data={dummyData} />;
};

export const DraggableBottomScreen = () => {
  return (
    <SafeAreaView style={styles.flex1Gray}>
      <DraggableBottomSheet />
    </SafeAreaView>
  );
};

export const SwipeDeckScreen = () => {
  return <SwipeDeck data={users} />;
};

export const ZoomableImageScreen = () => {
  return (
    <View style={styles.flex1CenterBoth}>
      <ZoomableImage
        uri={require('../assets/images/cover.jpg')}
        width={WINDOW_WIDTH}
        height={200}
        cropWidth={WINDOW_WIDTH}
        cropHeight={WINDOW_HEIGHT}
      />
    </View>
  );
};

export const SwipeableListScreen = () => {
  return <SwipeableList data={dummyData} onDelete={() => {}} />;
};

export const PickPhoneColorScreen = () => {
  return <PickPhoneColor />;
};

export const CubeCarouselScreen = () => {
  return <CubeCarousel data={users} />;
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  flex1Gray: {
    flex: 1,
    backgroundColor: 'grey'
  },
  flex1CenterBoth: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
