import React, {Component} from 'react';
import {View, Image, Text, KeyboardAvoidingView} from 'react-native';
import Form from './Form';

export default class Login extends Component {
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={forstyle.container}>
        <View style={forstyle.logoContainer}>
          <Image
            style={forstyle.logo}
            source={require('../pelangi.jpg')}
          />
          <Text style={forstyle.title}>Login</Text>
        </View>
        <View style={forstyle.formContainer}>
          <Form/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const forstyle = {
  container: {
    flex: 1,
    justifyContent: 'center',
    width: 360,
    backgroundColor: '#F08080',
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B5998',
    marginVertical: 10,
    paddingHorizontal: 80
  },
  title: {
    color: '#fff',
    fontSize: 45
  }
}