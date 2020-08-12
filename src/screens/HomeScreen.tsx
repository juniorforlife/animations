import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    padding: 8,
    margin: 8,
    borderWidth: 1,
    borderRadius: 8
  }
});

export default ({navigation}) => {
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate('AnimatedListScreen')}
        style={styles.item}>
        <Text>Animated List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('DraggableBottomScreen')}
        style={styles.item}>
        <Text>Draggable Bottom Sheet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('ModalScreen')}
        style={styles.item}>
        <Text>Modal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('SwipeDeckScreen')}
        style={styles.item}>
        <Text>Swipe Deck</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('ZoomableImageScreen')}
        style={styles.item}>
        <Text>Zoomable Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('SwipeableListScreen')}
        style={styles.item}>
        <Text>Swipeable List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('PickPhoneColorScreen')}
        style={styles.item}>
        <Text>Pick phone color</Text>
      </TouchableOpacity>
    </View>
  );
};
