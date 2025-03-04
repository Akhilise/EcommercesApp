import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

const Button = ({ onPress }) => {
    onPress = { onPress }
  return (
    <View style={styles.view}>
      <View>
        <TouchableOpacity style={styles.InstaStyle} activeOpacity={0.5}>
          <Image
            source={require("../assets/instagram.png")}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.InstaStyle} activeOpacity={0.5}>
          <Image
            source={require("../assets/search.png")}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.InstaStyle} activeOpacity={0.5}>
          <Image
            source={require("../assets/X.png")}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
     
  );
 
};


const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  InstaStyle: {
    marginTop: 35,
    marginHorizontal: 35,
  },

  ImageIconStyle: {
    height: 45,
    width: 45,
  },
});

export default Button;
