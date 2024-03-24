import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';

export default function BusinessListByCategoriesScreen() {
    const navigation = useNavigation();
    const param = useRoute().params;

    const [businessList,setBusinessList] = useState([]);
    useEffect(() => {
        param && getBusinessByCategory()
    },[param])

    const getBusinessByCategory = () => {
        GlobalApi.getBusinessListByCategory(param.category).then(resp=> {
            setBusinessList(resp.businessLists);
        })
    }
  return (
    <View style={{padding: 20,paddingTop: 20}}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
              <Text style={{fontSize: 25,fontFamily: 'Outfit-Medium',color: 'black'}}>{param?.category}</Text>
    </View>
    {businessList?.length>0? <FlatList
        data={businessList}
        style={{marginTop: 15}}
        renderItem={({item,index}) => (
            <BusinessListItem business = {item}/>
        )}
    />:
    <Text style={{fontFamily: 'Outfit-Medium',fontSize: 20,textAlign: 'center',marginTop: '20%'}}>No Business Found</Text>}
    </View>
  )
}