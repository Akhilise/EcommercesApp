import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current; // Animation reference

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);

    Animated.timing(animatedValue, {
      toValue: isEnabled ? 0 : 1, // Moves slider left (0) or right (1)
      duration: 250, // Animation duration (ms)
      useNativeDriver: false,
    }).start();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [5, 40], // Slider positions
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.switch,
          { backgroundColor: isEnabled ? "#4CAF50" : "#ccc" },
        ]}
        onPress={toggleSwitch}
        activeOpacity={0.7}
      >
        <Animated.View style={[styles.slider, { transform: [{ translateX }] }]}>
          <Text style={styles.switchText}>{isEnabled ? "ON" : "OFF"}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
   
  },
  switch: {
    width: 70,
    height: 40,
    borderRadius: 20,
    padding: 5,
    justifyContent: "center",
    position: "relative",
  },
  slider: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    elevation: 3,
  },
  switchText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ToggleSwitch;
