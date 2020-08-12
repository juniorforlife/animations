import React, {useRef, useState} from 'react';
import {Animated, View, PanResponder} from 'react-native';

import styles from './styles';
import {WINDOW_WIDTH} from '../../utils';

interface User {
  id: number;
  avatar: string;
}

interface DeckProps {
  data: User[];
}

const SwipeDeck = (props: DeckProps) => {
  const {data} = props;

  const [cardIndex, setCardIndex] = useState(0);
  const animatedCard = useRef(new Animated.ValueXY()).current;

  const swipeOutOfScreen = (direction: 'left' | 'right') => {
    Animated.spring(animatedCard, {
      toValue: {
        x: direction === 'left' ? -WINDOW_WIDTH * 2 : WINDOW_WIDTH * 2,
        y: 0
      },
      useNativeDriver: false
    }).start(() => {
      animatedCard.setValue({x: 0, y: 0});
      setCardIndex((prevCardIndex) => prevCardIndex + 1);
    });
  };

  const resetPosition = () => {
    Animated.timing(animatedCard, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false
    }).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        animatedCard.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > WINDOW_WIDTH * 0.25) {
          swipeOutOfScreen('right');
        } else if (gesture.dx < -WINDOW_WIDTH * 0.25) {
          swipeOutOfScreen('left');
        } else {
          resetPosition();
        }
      }
    })
  ).current;

  function renderCards() {
    if (!Array.isArray(data)) {
      return null;
    }
    return data
      .map((item: User, index) => {
        if (index >= cardIndex) {
          const isActiveCard = cardIndex === index;
          let cardAnimation = {};
          let nopeTextAnimation = {};
          let likeTextAnimation = {};

          if (isActiveCard) {
            cardAnimation = {
              transform: [
                {
                  translateX: animatedCard.x
                },
                {
                  translateY: animatedCard.y.interpolate({
                    inputRange: [-30, 0, 30],
                    outputRange: [-30, 0, 30],
                    extrapolate: 'clamp'
                  })
                },
                {
                  rotate: animatedCard.x.interpolate({
                    inputRange: [-WINDOW_WIDTH * 1.5, 0, WINDOW_WIDTH * 1.5],
                    outputRange: ['-120deg', '0deg', '120deg']
                  })
                }
              ]
            };
            likeTextAnimation = {
              opacity: animatedCard.x.interpolate({
                inputRange: [0, WINDOW_WIDTH * 0.25],
                outputRange: [0, 1]
              })
            };
            nopeTextAnimation = {
              opacity: animatedCard.x.interpolate({
                inputRange: [-WINDOW_WIDTH * 0.25, 0],
                outputRange: [1, 0]
              })
            };
          }

          return (
            <Animated.View
              key={item.id}
              style={[styles.cardContainer, cardAnimation]}>
              <Animated.Image
                source={{uri: item.avatar}}
                style={[styles.cardImg]}
              />
              {isActiveCard && (
                <React.Fragment>
                  <Animated.Text
                    style={[styles.text, styles.likeText, likeTextAnimation]}>
                    LIKE
                  </Animated.Text>
                  <Animated.Text
                    style={[styles.text, styles.nopeText, nopeTextAnimation]}>
                    NOPE
                  </Animated.Text>
                </React.Fragment>
              )}
            </Animated.View>
          );
        }
      })
      .reverse();
  }

  return (
    <View style={styles.deck} {...panResponder.panHandlers}>
      {renderCards()}
    </View>
  );
};

export default SwipeDeck;
