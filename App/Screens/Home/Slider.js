import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {
    
    const [slider,setSlider] = useState([]);
    useEffect(() => {
        getSlider();
    },[])
    const getSlider = () => {
        GlobalApi.getSlider().then(resp => {
            console.log("resp",resp.sliders);
            setSlider(resp?.sliders)
        })
    }
  return (
    <View>
      <Text style={styles.heading}>Offers For You</Text>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index}) => (
            <View style={{margin: 5}}>
                <Image source={{uri:item?.image?.url}} style={styles.sliderImage}/>
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily: 'Outfit-Medium',
        marginBottom: 10
    },
    sliderImage: {
        marginTop: -20,
        width: 270,
        height: 150,
        borderRadius: 20,
        objectFit: 'contain'
    }
})