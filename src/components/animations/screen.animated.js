import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

export const AnimatedScreen = ({animation_style, children}) => {
  <Animated.View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      ...animation_style,
    }}>
    {children}
  </Animated.View>;
};
