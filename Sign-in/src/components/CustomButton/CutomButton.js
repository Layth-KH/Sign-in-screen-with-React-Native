import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CutomButton = ({text,onPress, type="PRIMARY", fontcolor, bgcolor}) => {
  return (
    <Pressable
    onPress={onPress}
    style = {[styles.container,
        styles[`container_${type}`], 
        bgcolor ? {backgroundColor: bgcolor}:{}
    ]} >
      <Text style = {[styles.text,
      fontcolor ? {color: fontcolor} : {}]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
container: {
    backgroundColor: '#0C1CE2',
    width: '90%',
    height: 50,
    justifyContent:'center',
    alignItems: 'center',
    marginVertical: 2
},
container_PRIMARY: {
    backgroundColor: '#0C1CE2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D5D2D2',
    width: '90%',
    height: 50,
    justifyContent:'center',
    alignItems: 'center',
    marginVertical: 2
},
container_TERTIARY: {
    backgroundColor: '#CECCCC',
    width: '90%',
    height: 50,
    justifyContent:'center',
    alignItems: 'center',
    marginVertical: 2
},
text: {
    fontWeight: 'bold',
    color: '#FFFFFF'
}


})

export default CutomButton