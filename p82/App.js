import React from "react"
import {View} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Feeds from "./Screens/Feed"
import CreatePost from "./Screens/CreatePost"
import Ionicons from "react-native-vector-icons/Ionicons"
import DrawerNavigator from "./Navigation/DrawerNavigation"

const Tab=createBottomTabNavigator()

export default class App extends React.Component{
render(){
  return(
    <NavigationContainer>
        <DrawerNavigator/>   
    </NavigationContainer>
  )
}
}