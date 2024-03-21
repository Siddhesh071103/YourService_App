import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.centre}>
      <Text style={styles.mid}>HOME SERVICE</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mid: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F60B8A'
  },
  centre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})