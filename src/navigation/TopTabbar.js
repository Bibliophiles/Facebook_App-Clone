import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import WatchScreen from '../screens/WatchScreen';
import MarketPlaceScreen from '../screens/MarketPlaceScreen';
import NotificationScreen from '../screens/NotificationScreen';
import FriendScreen from '../screens/FriendScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Entypo, Ionicons } from '@expo/vector-icons';


const Tab = createMaterialTopTabNavigator();

const TopTabbar = () => {
  return (
    <Tab.Navigator>
      
      <Tab.Screen
          name="home"
          component={HomeScreen}
        options={{
          tabBarShowLabel : false,
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={25} color="grey" />),
          }} 
        />
      <Tab.Screen
          name="friends"
          component={FriendScreen}
        options={{
            tabBarShowLabel : false,
            tabBarIcon: () => (
              <Ionicons name="people" size={20} color="grey" />),
          }}   
      />
          <Tab.Screen 
             name="notify"
             component={NotificationScreen}
            options={{
              tabBarShowLabel : false,
               tabBarIcon: () => (
                 <Ionicons name="notifications-outline" size={20} color="grey" />),
             }} 
          />
      <Tab.Screen
          name="watch"
          component={WatchScreen}
          options={{
              tabBarShowLabel : false,
              tabBarIcon: () => (
                 <Ionicons name="logo-youtube" size={20} color="grey" />),
          }} 
      />
      <Tab.Screen 
           name="market"
           component={MarketPlaceScreen}
        options={{
          tabBarShowLabel : false,
             tabBarIcon: () => (
               <Entypo name="shop" size={20} color="grey" />),
           }} 
      />
      <Tab.Screen
         name="profile"
         component={ProfileScreen}
        options={{
          tabBarShowLabel : false,
           tabBarIcon: () => (
             <Ionicons name="person" size={20} color="grey" />),
         }}   
      />
      
      </Tab.Navigator>
    );
};

export default TopTabbar;
