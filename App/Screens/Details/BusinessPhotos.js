import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

export default function BusinessPhotos({business}) {
  return (
    <View>
          <Text style={{ marginTop: -15, color: 'black', fontSize: 20, fontFamily: 'Outfit-Bold' }}>Photos</Text>
          <FlatList 
            data={business.images}
            numColumns={2}
            renderItem={({item}) => (
                <Image source={{uri:item.url}}
                    style={{width: '100%',flex: 1, height: 120, borderRadius: 15, margin: 7}}
                />
            )}
          />
    </View>
  )
}