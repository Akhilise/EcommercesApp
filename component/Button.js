import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

const Button = ({ onPress = () => {}, imageSources = [], buttonStyle ,style}) => {
  return (
    <View style={styles.view}>
      {Array.isArray(imageSources) &&
        imageSources.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, buttonStyle]}
            activeOpacity={0.7}
            onPress={() => onPress(index)}
          >
            <Image source={item.image} style={style} />
            <Text style={styles.textStyle}>{item.text || ""}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};


const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    //padding: 10,
    marginHorizontal: 5,
  },
  imageIconStyle: {
    height: 45,
    width: 45,
    borderWidth:1
  },
  textStyle: {
    marginTop: 5,
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    fontWeight:"bold"
  },
});

export default Button;
