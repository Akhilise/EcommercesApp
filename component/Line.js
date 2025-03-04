import React from 'react';
import {  View,Text } from 'react-native';

const Line = ({children}) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center",marginTop:45 }}>
                  <View style={{ flex: 3, height: 1, backgroundColor: "grey" }} />
                  <View>
                    <Text style={{ width: 90, textAlign: "center",color:'grey' }}>{children}</Text>
                  </View>
                  <View style={{ flex: 3, height: 1, backgroundColor: "grey" }} />
                </View>
    );
}



export default Line;
