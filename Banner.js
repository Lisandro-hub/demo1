import React from 'react';
import { View, Text } from 'react-native';

const Banner = (props) =>{
    return(
        <View>
            <Text>
                {props.saludo} - {props.titulo}
            </Text>
        </View>
    );
}
export default Banner