import { View, Text, TouchableOpacity, StyleSheet, FlatList, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import CalendarPicker from 'react-native-calendar-picker'
import Colors from '../../Utils/Colors'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import GlobalApi from '../../Utils/GlobalApi'

export default function BookingModal({businessId,hideModal}) {
  
  const [timeList,setTimeList] = useState();
  const [selectedTime,setSelectedTime] = useState();
  const [selectedDate,setSelectedDate] = useState();
  const [note,setNote] = useState();
  useEffect(() => {
    getTime();
  },[])
  const getTime = () => {
    const timeList = [];
    for(let i=8;i<=12;i++)
    {
      timeList.push({
        time:i+':00 AM'
      })
      timeList.push({
        time:i+':30 AM'
      })
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ':00 PM'
      })
      timeList.push({
        time: i + ':30 PM'
      })
    }
    setTimeList(timeList);
  }

  const createNewBooking = () => {
    if(!selectedTime||!selectedDate)
    {
      ToastAndroid.show('Please select Date & Time', ToastAndroid.LONG)
      return;
    }
    const data={
      userName: user?.fullName,
      userEmail:user?.primaryEmailAddress.emailAddress,
      time:selectedTime,
      date:selectedDate,
      note:note,
      businessId: businessId
    }
    GlobalApi.createBooking(data).then(resp => {
      console.log("Resp",resp)
      ToastAndroid.show('Booking Created Successfully',ToastAndroid.LONG)
    })
  }
  const navigation = useNavigation();
  return (
    <ScrollView>
    <KeyboardAvoidingView>
      <TouchableOpacity style={styles.backBtn} onPress={() => hideModal()}>
              <Ionicons name="arrow-back-outline" size={30} color="black" />
              <Text style={{fontSize: 25,color: 'black',fontFamily: 'Outfit-Medium'}}>Booking</Text>
      </TouchableOpacity>
      <View style={{ borderWidth: 0.4, marginTop: 65, marginBottom: 20 }}></View>
      <View style={styles.date}>
      <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Outfit-Regular' }}>Select Date</Text>
    </View>
      <View style={styles.calendar}>
        <CalendarPicker onDateChange={setSelectedDate} width={340} minDate={Date.now} todayBackgroundColor={Colors.BLACK}
        todayTextStyle={{color: 'white'}}
        selectedDayColor={{color: '#803FFF'}}
        selectedDayTextColor={{color: 'white'}}
        />
      </View>
      <View>
        <View style={styles.time}>
          <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Outfit-Regular' }}>Select Time Slot</Text>
        </View>
       <FlatList
        style={{marginLeft: 25}}
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index}) => (
          <TouchableOpacity style={{marginRight: 10}}
          onPress={() => setSelectedTime(item.time)}>
            <Text style={[selectedTime==item.time? styles.selectedTime:styles.unSelectedTime]}>{item.time}</Text>
          </TouchableOpacity>
        )}
       />
      </View>
        <View style={styles.time}>
          <Text style={{ fontSize: 20, color: 'black', fontFamily: 'Outfit-Regular' }}>Any Suggestion Note</Text>
          <TextInput placeholder='Note' numberOfLines={4} multiline={true} style={styles.input}
            onChange={(text) => setNote(text)}
          /> 
        </View>
        <TouchableOpacity style={{marginTop: 15}} onPress={() => createNewBooking()}>
          <Text style={styles.confirmBtn}>Confirm & Book</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backBtn: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  date: {
    marginTop: -10,
    marginLeft: 35
  },
  calendar: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 20,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 340,
  },
  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    backgroundColor: Colors.PRIMARY,
    color: 'white'
  },
  unSelectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    color: Colors.PRIMARY
  },
  time: {
    marginTop: 15,
    marginLeft: 35
  },
  input: {
    marginLeft:-10,
    marginRight: 30,
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: 'top',
    padding: 20,
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    borderColor: Colors.PRIMARY
  },
  confirmBtn: {
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontSize: 17,
    width: 365,
    marginLeft: 13,
    backgroundColor: Colors.PRIMARY,
    color: 'white',
    padding: 13,
    borderRadius: 99,
    elevation: 2
  }
})