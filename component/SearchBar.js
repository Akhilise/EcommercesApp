import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SearchBar = ({ onSearchPress, onCameraPress ,onSearchScreen }) => {
  return (
    <View style={styles.container}>
    
      <TouchableOpacity onPress={onSearchPress}>
        <Icon name="search" size={24} color="#61b5f1" style={styles.iconLeft} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}
      onPress={onSearchScreen} ></TouchableOpacity>
      

      
      <TouchableOpacity onPress={onCameraPress}>
        <Icon
          name="camera-alt"
          size={24}
          color="#888"
          style={styles.iconRight}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
   
    margin: 10,
  },
  iconLeft: {
    marginRight: 8,
  },
  input: {
    flex: 1,
   },
  iconRight: {
    marginLeft: 8,
  },
});

export default SearchBar;
