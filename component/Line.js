import React from 'react';
import {  View,Text } from 'react-native';

const Line = ({children,style}) => {
    return (
        <View style={style}>
                  <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
                  <View>
                    <Text style={{ width: 90, textAlign: "center",color:'grey' }}>{children}</Text>
                  </View>
                  <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
                </View>
    );
}



export default Line;
