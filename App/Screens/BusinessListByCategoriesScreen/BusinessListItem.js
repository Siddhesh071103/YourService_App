import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

export default function BusinessListItem({business}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('business-details',{
        business: business
    })} style={styles.container}>
      <Image source={{uri: business?.images[0]?.url}}
        style={styles.image}
      />
      <View style={styles.subContainer}>
        <Text style={{fontFamily: 'Outfit-Regular',fontSize: 15}}>{business.contactPerson}</Text>
        <Text style={{fontFamily: 'Outfit-Bold',fontSize: 18,color: 'black'}}>{business.name}</Text>
        <Text style={{ fontFamily: 'Outfit-Regular', fontSize: 15}}><Ionicons name="location-sharp" size={20} color="#803fff" />{business.address}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    subContainer: {
        display: 'flex',
        gap: 2
    }
})