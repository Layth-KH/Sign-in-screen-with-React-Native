import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function CustomInput({placeholder, value, setValue,secureTextEntry}) {
  return (
    <View style = {styles.container}>
      <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style = {styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    width: '90%',
    height: '12%',
    justifyContent:'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D5D2D2',
    marginVertical: 5
  },
  textInput: {
    
  }

})