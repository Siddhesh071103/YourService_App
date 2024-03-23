import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text>Booking Screen</Text>
        {/* Your other content goes here */}
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('home')}>
          <Fontisto name="home" size={25} color="#8E3FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('booking')}>
          <FontAwesome name="calendar-check-o" size={25} color="#8E3FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('profile')}>
          <FontAwesome name="user-circle" size={25} color="#8E3FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
    width: '95%',
    height: 50,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 15,
    position: 'absolute',
    marginBottom: 10,
    bottom: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: Colors.PRIMARY,
    fontSize: 10,
  },
});
