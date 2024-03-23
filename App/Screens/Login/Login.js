import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: 'center' }}>
      <Image style={styles.loginImage} source={require('../../../assets/login.png')} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Let's Get Started with Complain and Repair Service</Text>
        <Text style={styles.headtxt}>Best App to find services near you which deliver you a professional service</Text>
        <TouchableOpacity onPress={() => navigation.navigate('home')} 
        style={styles.but}>
          <Text style={styles.start}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 15
  },
  subContainer: {
    width: 395,
    height: '70%',
    backgroundColor: Colors.PRIMARY,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  headtxt: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
  },
  but: {
    position: 'absolute',
    backgroundColor: 'white',
    marginTop: 180,
    marginLeft: 20,
    width: 350,
    height: 50,
    borderRadius: 50,
  },
  start: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 17,
    color: Colors.PRIMARY,
  }
})
