import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';

import styles from './styles';

const colors = [
  {code: '#fedec5', name: 'Gold'},
  {code: '#6d7a71', name: 'Green'},
  {code: '#eeeee6', name: 'Silver'},
  {code: '#545351', name: 'Space gray'}
];
const iphoneImages = [
  require('../../../assets/images/iphone_11_pro_max_gold.png'),
  require('../../../assets/images/iphone_11_pro_max_midnight_green.png'),
  require('../../../assets/images/iphone_11_pro_max_silver.png'),
  require('../../../assets/images/iphone_11_pro_max_space_gray.png')
];

const PickPhoneColor = () => {
  const [pickedColorIndex, setPickedColorIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(5)).current;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Image
          source={iphoneImages[pickedColorIndex]}
          style={[
            styles.image,
            {
              opacity: animatedValue.interpolate({
                inputRange: [0, 2, 5],
                outputRange: [0, 0.2, 1]
              }),
              transform: [
                {perspective: 850},
                {
                  rotateY: animatedValue.interpolate({
                    inputRange: [0, 5],
                    outputRange: ['60deg', '0deg']
                  })
                }
              ]
            }
          ]}
        />
        <Animated.View
          style={[
            styles.imageMask,
            {
              backgroundColor: colors[pickedColorIndex].code,
              transform: [{scale: animatedValue}]
            }
          ]}
        />
      </View>
      <View style={styles.grid}>
        {colors.map(({code, name}, index) => (
          <TouchableOpacity
            key={code}
            style={[styles.cell]}
            onPress={() => {
              if (index !== pickedColorIndex) {
                setPickedColorIndex(index);
                animatedValue.setValue(0);
                Animated.timing(animatedValue, {
                  toValue: 5,
                  duration: 1200,
                  useNativeDriver: true
                }).start();
              }
            }}>
            <View style={[styles.colorOption, {backgroundColor: code}]} />
            <Text style={[index === pickedColorIndex && styles.hightlighted]}>
              {name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PickPhoneColor;
