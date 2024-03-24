import { View, Text, StyleSheet,Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
    const navigation = useNavigation();

    const[categories,setCategories] = useState([]);
    useEffect(() => {
        getCategories();
    },[])
    const getCategories = () => {
        GlobalApi.getCategories().then(resp => {
            setCategories(resp?.categories);
        })
    }
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <Text>View All</Text>
    </View>
    <View>
        <FlatList
        data={categories}
             numColumns={4}
              renderItem={({ item, index }) => (
                  <TouchableOpacity style={styles.imgSpace} onPress={() => navigation.navigate('business-list',{
                      category: item.name
                  })}>
                  <View style={{ backgroundColor: Colors.LIGHT_GRAY,padding: 17,borderRadius: 99}}>
                      <Image source={{ uri: item?.icon?.url }} style={styles.categoryImage} />
                  </View>
                  <Text style={{fontFamily: 'Outfit-medium',marginTop: 5,color: 'black'}}>{item?.name}</Text>
                </TouchableOpacity>
              )}
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: -10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    head: {
        fontSize: 20,
        fontFamily: 'Outfit-Medium',
        marginBottom: 10
    },
    categoryImage: {
        width: 30,
        height: 30,
    },
    imgSpace: {
        flex: 1,
        alignItems: 'center'
    }
})