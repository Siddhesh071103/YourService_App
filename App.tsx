import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/Screens/Login/Login';
import HomeScreen from './App/Screens/Home/HomeScreen';
import BookingScreen from './App/Screens/Bookings/BookingScreen';
import ProfileScreen from './App/Screens/Profile/ProfileScreen';
import BusinessListByCategoriesScreen from './App/Screens/BusinessListByCategoriesScreen/BusinessListByCategoriesScreen';
import BusinessDetails from './App/Screens/Details/BusinessDetails';
const Stack = createStackNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        options={{headerShown: false}}
        name='login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='home' component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name='booking' component={BookingScreen} />
        <Stack.Screen options={{ headerShown: false }} name='profile' component={ProfileScreen} />
        <Stack.Screen options={{headerShown: false }} name='business-list' component={BusinessListByCategoriesScreen}/>
        <Stack.Screen options={{headerShown: false}} name='business-details' component={BusinessDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})