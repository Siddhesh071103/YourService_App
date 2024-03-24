import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessAboutMe({business}) {
    const [isReadMore,setIsReadMore] = useState(false)
  return business&& (
              <View>
                <Text style={{marginTop: -15,color: 'black',fontSize: 20,fontFamily: 'Outfit-Bold'}}>About Me</Text>
                <Text style={{fontFamily: 'Outfit-Regular',fontSize: 16,lineHeight: 28}} numberOfLines={isReadMore?20:5}>{business.about}</Text>
                <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
                      <Text style={{ color: Colors.PRIMARY, fontSize: 16, fontFamily: 'Outfit-Regular' }}>{isReadMore ? 'Read Less' : 'Read More'}</Text>
                </TouchableOpacity>
              </View>
  )
}