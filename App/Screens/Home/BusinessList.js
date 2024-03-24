import { Text, View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListSmall from './BusinessListSmall';

export default function BusinessList() {
  
  const [businessList, setBusinessList] = useState([]);;
  useEffect(() => {
    getBusinessList();
  }, [])
  const getBusinessList = () => {
    GlobalApi.getBusinessList().then(resp => {
      console.log(resp);
      setBusinessList(resp.businessLists);
    })
  }
    return (
    <View>
    <View style={styles.container}>
      <Text style={styles.head}>Latest Business</Text>
      <Text>View All</Text>
    </View>
    <View>
        <FlatList
          data={businessList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={{marginRight: 10}}>
            <BusinessListSmall business={item}/>
            </View>
          )}
        />
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  head: {
    fontSize: 20,
    fontFamily: 'Outfit-Medium',
    marginBottom: 10
  },
})