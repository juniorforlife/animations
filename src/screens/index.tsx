import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  AnimatedList,
  DraggableBottomSheet,
  Modal,
  SwipeDeck,
  ZoomableImage,
  SwipeableList,
  PickPhoneColor
} from '../vanilla-animation';
import users from '../vanilla-animation/SwipeDeck/data';
import {WINDOW_WIDTH} from '../utils';
import dummyData from '../dummyData';

export {default as HomeScreen} from './HomeScreen';

export const AnimatedListScreen = () => {
  return <AnimatedList data={dummyData} />;
};

export const DraggableBottomScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'grey'}}>
      <DraggableBottomSheet />
    </SafeAreaView>
  );
};

export const ModalScreen = () => {
  const [modalVisible, setModalVisibility] = useState<boolean>(false);
  const showModal = () => setModalVisibility(true);
  const hideModal = () => setModalVisibility(false);
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={showModal} style={{marginTop: 100}}>
        <Text>Show modal</Text>
      </TouchableOpacity>
      <Modal isVisible={modalVisible} onClose={hideModal} title="Modal" />
    </View>
  );
};

export const SwipeDeckScreen = () => {
  return <SwipeDeck data={users} />;
};

export const ZoomableImageScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ZoomableImage width={WINDOW_WIDTH} height={200} />
    </View>
  );
};

export const SwipeableListScreen = () => {
  return <SwipeableList data={dummyData} />;
};

export const PickPhoneColorScreen = () => {
  return <PickPhoneColor />;
};
