import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NoteView from "./NoteView"
import HomeScreen from "./HomeView"


export default function Nav() {
  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Note" component={NoteView}/>
      </Tab.Navigator>
    </NavigationContainer>
  );

}
