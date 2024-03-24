import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListSmall({business}) {
  return (
    <View style={{padding: 10,backgroundColor: 'white',borderRadius: 10}}>
      <Image source={{uri:business?.images[0]?.url}}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontSize: 17,fontFamily: 'Outfit-Medium'}}>{business?.name}</Text>
        <Text style={{fontSize: 13,fontFamily: 'Outfit-Regular'}}>{business?.contactPerson}</Text>
        <Text style={{fontSize: 10,fontFamily: 'Outfit-Regular',padding: 3,color: Colors.PRIMARY,backgroundColor: Colors.PRIMARY_LIGHT,backgroundColor: Colors.PRIMARY_LIGHT,borderRadius: 3,alignSelf: 'flex-start',paddingHorizontal: 7}}>{business?.category.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 90,
        borderRadius: 5 ,
    },
    infoContainer: {
        padding: 7,
        display: 'flex',
        gap: 3
    }
})