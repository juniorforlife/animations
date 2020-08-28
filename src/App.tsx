import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  AnimatedListScreen,
  HomeScreen,
  DraggableBottomScreen,
  SwipeDeckScreen,
  ZoomableImageScreen,
  SwipeableListScreen,
  PickPhoneColorScreen,
  CubeCarouselScreen
} from './screens';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen
      name="AnimatedListScreen"
      component={AnimatedListScreen}
      options={{title: 'Animated List'}}
    />
    <Stack.Screen
      name="DraggableBottomScreen"
      component={DraggableBottomScreen}
      options={{title: 'Draggable Bottom Sheet'}}
    />
    <Stack.Screen
      name="SwipeDeckScreen"
      component={SwipeDeckScreen}
      options={{title: 'Swipe Deck'}}
    />
    <Stack.Screen
      name="ZoomableImageScreen"
      component={ZoomableImageScreen}
      options={{title: 'Swipe Deck'}}
    />
    <Stack.Screen
      name="SwipeableListScreen"
      component={SwipeableListScreen}
      options={{title: 'Swipeable List'}}
    />
    <Stack.Screen
      name="PickPhoneColorScreen"
      component={PickPhoneColorScreen}
      options={{title: 'Pick Phone Color'}}
    />
    <Stack.Screen
      name="CubeCarouselScreen"
      component={CubeCarouselScreen}
      options={{title: 'Cube Carousel'}}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
