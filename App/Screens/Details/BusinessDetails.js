import { View, Text, Image, TouchableOpacity,StyleSheet, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../Utils/Colors';
import BusinessPhotos from './BusinessPhotos';
import BusinessAboutMe from './BusinessAboutMe';
import BookingModal from './BookingModal';

export default function BusinessDetails() {
    const [showModal,setShowModal] = useState(false)
    const navigation = useNavigation();
    const param = useRoute().params;
    const [business,setBusiness] = useState(param.business);
    const [isReadMore,setIsReadMore] = useState(false);
    useEffect(() => {
        
    },[])
  return (
    <View>
    <ScrollView style={{height: '91%'}}> 
    <TouchableOpacity onPress={() => navigation.goBack()}
    style={styles.backBtn}>
              <Ionicons name="arrow-back-outline" size={30} color="white" />
    </TouchableOpacity>
      <Image source={{uri: business?.images[0]?.url}}
        style={{width: '100%',height: 300}}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontFamily: 'Outfit-Bold',color: 'black',fontSize: 25}}>{business?.name}</Text>
        <View style={styles.subContainer}>
                  <Text style={{ fontFamily: 'Outfit-Medium', color: Colors.PRIMARY, fontSize: 20 }}>{business?.contactPerson}✨</Text>
        <Text style={{color: Colors.PRIMARY,backgroundColor: Colors.PRIMARY_LIGHT,padding: 5,borderRadius:5,fontSize: 14}}>{business?.category.name}</Text>
        </View>
              <Text style={{fontSize: 15,fontFamily: 'Outfit-Regular'}}><Ionicons name="location-sharp" size={25} color="#803fff" />{business.address}</Text>

              <View style={{borderWidth: 0.4,marginTop: 10,marginBottom: 20}}></View>

             <BusinessAboutMe business={business}/>

              <View style={{ borderWidth: 0.4, marginTop: 10, marginBottom: 20 }}></View>

              <BusinessPhotos business={business}/>
      </View>
          </ScrollView>
    <View style={{display: 'flex',flexDirection: 'row',margin: 8,gap: 8}}>
        <TouchableOpacity style={styles.msgButton}>
            <Text style={{textAlign: 'center',fontFamily: 'Outfit-Medium',color: Colors.PRIMARY,fontSize: 18}}>Message</Text>
        </TouchableOpacity>
              <TouchableOpacity style={styles.bookingButton} onPress={() => setShowModal(true)}>
             <Text style={{ textAlign: 'center', fontFamily: 'Outfit-Medium', color: 'white', fontSize: 18 }}>Book Now</Text>
        </TouchableOpacity>
    </View>
    <Modal
    animationType='slide'
    visible={showModal}
    >
    <BookingModal 
    businessId={business.id}
    hideModal={() => setShowModal(false)}/>
    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    backBtn: {
        position: 'absolute',
        zIndex: 10,
        padding: 20
    },
    infoContainer: {
        padding: 20,
        display: 'flex',
        gap: 7
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    msgButton: {
        padding: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        flex: 1
    },
    bookingButton: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        flex: 1
    }
})