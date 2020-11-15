import React, {Component, useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from "react-native";

export function AuthScreen() {
  let [username, setUsername] = useState('');

  return (
    <View style={styles.background}>
      <View style={styles.authContainer}>
        <Text style={styles.authText}>What's your username?</Text>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
          <TextInput
            style={styles.textInput}
            onChangeText={(input: string) => username = input}
          />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>GO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = {
  background: {
    backgroundColor: '#240046',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authText: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 16,
  },
  authContainer: {
    height: 100,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: '#3C096C',
    color: '#fff',
    fontWeight: '500',
    borderRadius: 4,
    width: '80%',
    height: 30,
    paddingLeft: 8,
    paddingRight: 8,
    outlineWidth: 0
  },
  submitButton: {
    backgroundColor: '#FF6D00',
    textColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16
  },
  buttonText: {
    fontWeight: '500',
    color: '#fff'
  }
}
