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
          placeholderTextColor="#fdfefe"
          onSubmitEditing={() => this.password.focus()}
          style={forstyle.email}
        />
        <TextInput
          placeholder="Password"
          returnKeyType="go"
          placeholderTextColor=" #fdfefe"
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
    backgroundColor: 'rgba (231, 76, 60)',
    marginBottom: 20,
    color: '#e74c3c',
    paddingHorizontal: 20,
  },
  password: {
    height: 40,
    backgroundColor: 'rgba( 231, 76, 60)',
    color: '#e74c3c',
    paddingHorizontal: 20,
    marginBottom: 20
  }
}