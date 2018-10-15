import React from 'react';
import {Text} from 'react-native';

export  default  class Judul extends React.Component{
	render(){
		return(
		
			
			<Text style={salon.Judul}>Biodata</Text>
		);
	}
}
const salon = {
	Judul: {
		color: '#000', 
		fontSize: 50,
		fontWeight: 'bold',
	}
}