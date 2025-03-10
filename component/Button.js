import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView } from "react-native";

const Button = ({ onPress, imageSources = [], buttonStyle, textStyle }) => {
  return (
    <View style={styles.view}>
     
      {imageSources.map((item,index ) => (
        <View key={`${item.text}-${index}`} >
          <TouchableOpacity
            style={buttonStyle}
            activeOpacity={0.5}
            onPress={onPress}
          >
            <Image source={item.image} style={styles.imageIconStyle} />
            <Text style={styles.textStyle}>{item.text || ""}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  imageIconStyle: {
    marginTop: 5,
    height: 45,
    width: 45,
  },
  textStyle: {
    marginTop: 5,
    fontSize: 12,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Button;
