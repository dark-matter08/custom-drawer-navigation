import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';

import {MainScreen} from '../../features/main/screens/main.screen';
import {
  constants,
  COLORS,
  SIZES,
  FONTS,
  icons,
  dummyData,
} from '../../../constants';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon}) => {
  return (
    <TouchableOpacity
      style={styles.drawerItem}
      // onPress={() => }
    >
      <Image source={icon} style={styles.drawerItemImage} />
      <Text style={styles.drawerItemText}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={styles.drawerContentContainer}>
        {/* close */}
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            style={styles.center}
            onPress={() => navigation.closeDrawer()}>
            <Image source={icons.cross} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity
          style={styles.drawerProfileContainer}
          onPress={() => console.log('Profile')}>
          <Image
            source={dummyData.myProfile?.profile_image}
            style={styles.drawerProfileImage}
          />
          <View style={{marginLeft: SIZES.radius}}>
            <Text style={{colors: COLORS.white, ...FONTS.h3}}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={{colors: COLORS.white, ...FONTS.body4}}>
              View your Profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}
        <View style={styles.drawerItemsContainer}>
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />
          {/* Line Divider */}
          <View style={styles.drawerItemsDivider} />
          <CustomDrawerItem label={'Track your Order'} icon={icons.location} />
          <CustomDrawerItem label={'Coupons'} icon={icons.coupon} />
          <CustomDrawerItem label={'Settings'} icon={icons.setting} />
          <CustomDrawerItem label={'Invite a Friend'} icon={icons.profile} />
          <CustomDrawerItem label={'Help Center'} icon={icons.help} />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <CustomDrawerItem label={'Logout'} icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export const DrawerNavigator = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: styles.drawerStyle,
          sceneContainerStyle: styles.sceneContainerStyle,
          gestureEnabled: true,
          swipeEnabled: true,
        }}
        initialRouteName="MainScreen"
        drawerContent={props => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainScreen">
          {props => <MainScreen {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  drawerStyle: {
    flex: 1,
    width: '65%',
    paddingRight: 20,
    backgroundColor: COLORS.primary,
  },
  sceneContainerStyle: {
    backgroundColor: 'transparent',
  },
  drawerContentContainer: {
    flex: 1,
    paddingHorizontal: SIZES.radius,
  },
  closeButtonContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  closeIcon: {
    height: 35,
    width: 35,
    tintColor: COLORS.white,
  },
  drawerProfileContainer: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    alignItems: 'center',
  },
  drawerProfileImage: {
    width: 50,
    height: 50,
    borderRadius: SIZES.radius,
  },
  drawerItemsContainer: {
    flex: 1,
    marginTop: SIZES.padding,
  },
  drawerItemsDivider: {
    height: 1,
    marginVertical: SIZES.radius,
    marginLeft: SIZES.radius,
    backgroundColor: COLORS.lightGray1,
  },
  drawerItem: {
    flexDirection: 'row',
    height: 40,
    marginBottom: SIZES.base,
    alignItems: 'center',
    paddingLeft: SIZES.radius,
    paddingBottom: SIZES.base,
    // backgroundColor: ,
  },
  drawerItemText: {
    marginLeft: 15,
    color: COLORS.white,
    ...FONTS.h3,
  },
  drawerItemImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
});
