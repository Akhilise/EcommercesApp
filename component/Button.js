import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

const Button = ({ onPress = () => {}, imageSources = [], buttonStyle }) => {
  return (
    <View style={styles.view}>
      {imageSources.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, buttonStyle]}
          activeOpacity={0.7}
          onPress={() => onPress(index)}
        >
          <Image source={item.image} style={styles.imageIconStyle} />
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
    padding: 10,
    marginHorizontal: 5,
  },
  imageIconStyle: {
    height: 45,
    width: 45,
  },
  textStyle: {
    marginTop: 5,
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
});

export default Button;
