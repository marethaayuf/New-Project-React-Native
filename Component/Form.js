import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class Form extends Component {
  render(){
    return(
      <View style={forstyle.container}>
        <TextInput
          placeholder="Email"
          returnKeyType="next"
          keyboardType="email-address"
          placeholderTextColor="#fff"
          onSubmitEditing={() => this.password.focus()}
          style={forstyle.email}
        />
        <TextInput
          placeholder="Password"
          returnKeyType="go"
          placeholderTextColor="#fff"
          secureTextEntry
          ref={(input) => this.password = input}
          style={forstyle.password}
        />
      </View>
    )
  }
}

const forstyle = {
  container: {
    padding: 20,
  },
  email: {
    height: 40,
    backgroundColor: 'rgba(128,128,128,0.5)',
    marginBottom: 10,
    color: '#e50000',
    paddingHorizontal: 10,
  },
  password: {
    height: 40,
    backgroundColor: 'rgba(128,128,128,0.5)',
    color: '#e50000',
    paddingHorizontal: 10,
    marginBottom: 0
  }
}