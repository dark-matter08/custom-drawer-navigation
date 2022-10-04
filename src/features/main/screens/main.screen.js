import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {AnimatedScreen} from '../../../components/animations/screen.animated';
import Animated from 'react-native-reanimated';
import {useDrawerProgress, useDrawerStatus} from '@react-navigation/drawer';

export const MainScreen = ({navigation}) => {
  // const progress = useDrawerProgress();
  // const [progress, setProgress] = useState(new Animated.Value(0));
  const status = useDrawerStatus();
  let progress = new Animated.Value(0);
  if (status === 'open') {
    progress = 1;
  } else {
    progress = 0;
  }
  console.log(status);

  // let progress = 1;
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{scale}],
    transitionDuration: 500,
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...animatedStyle,
      }}>
      <Text style={{color: 'black'}}>MainScreen</Text>
    </Animated.View>
  );
};
