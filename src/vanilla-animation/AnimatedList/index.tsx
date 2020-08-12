import React, {useRef} from 'react';
import {Animated, View, TouchableOpacity, Text, FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils';
import styles from './styles';
import {COVER_IMG_HEIGHT, PROFILE_IMG_SIZE} from './styles';

interface AnimatedListProps {}
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const SCROLL_OFFSET = WINDOW_HEIGHT / 4;

const AnimatedList: React.FC<AnimatedListProps> = ({data}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef({});

  const coverAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, SCROLL_OFFSET],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    }),
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, SCROLL_OFFSET],
          outputRange: [0, -COVER_IMG_HEIGHT],
          extrapolate: 'clamp'
        })
      },
      {
        scaleY: animatedValue.interpolate({
          inputRange: [-100, 0, SCROLL_OFFSET],
          outputRange: [1.5, 1, 0],
          extrapolate: 'clamp'
        })
      }
    ]
  };

  const headerAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, SCROLL_OFFSET],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })
  };

  const profileAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, SCROLL_OFFSET * 0.7],
          outputRange: [COVER_IMG_HEIGHT * 0.5, -0.27 * PROFILE_IMG_SIZE],
          extrapolate: 'clamp'
        })
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, SCROLL_OFFSET],
          outputRange: [WINDOW_WIDTH * 0.35, 10],
          extrapolate: 'clamp'
        })
      },
      {
        scale: animatedValue.interpolate({
          inputRange: [0, SCROLL_OFFSET],
          outputRange: [1, 0.3],
          extrapolate: 'clamp'
        })
      }
    ],
    borderRadius: animatedValue.interpolate({
      inputRange: [-100, 0, SCROLL_OFFSET],
      outputRange: [16, 16, PROFILE_IMG_SIZE / 2]
    })
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, headerAnimation]}>
        <TouchableOpacity>
          <FontAwesome5 name="chevron-left" color="white" size={20} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.Image
        style={[styles.coverImg, coverAnimation]}
        source={require('../../../assets/images/vancouver.jpg')}
      />
      <Animated.Image
        style={[styles.profileImg, profileAnimation]}
        source={require('../../../assets/images/alex.jpg')}
      />

      <AnimatedFlatList
        ref={scrollRef}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animatedValue
                }
              }
            }
          ],
          {useNativeDriver: true}
        )}
        onScrollEndDrag={(event) => {
          // if (event.nativeEvent.contentOffset.y < SCROLL_OFFSET * 0.8) {
          //   scrollRef.current.scrollToOffset({y: 0});
          // } else {
          //   Animated.spring(animatedValue, {
          //     toValue: 300,
          //     useNativeDriver: true
          //   }).start();
          // }
        }}
        scrollEventThrottle={16}
        style={styles.postList}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.postContainer}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index: number) =>
          item.id ? item.id.toString() : index.toString()
        }
      />
    </View>
  );
};

export default AnimatedList;
