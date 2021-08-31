import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Imageb (){
    return(
        <View>
            <Image
          source={{
            uri: 'https://visual-engin.com/wp-content/uploads/sites/3/2016/08/react-native-componentes-blog-visual-engineering-e1562570940271.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        </View>
    );
}