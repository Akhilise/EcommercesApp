import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Button from "../component/Button";
import Animated, {
  useScrollViewOffset,
  useAnimatedRef,
  useDerivedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Icon } from "react-native-vector-icons/Icon";



const MainHomeScreen = () => {
  const [search, onSearchText] = useState("");
  const animatedRef = useAnimatedRef();
  const offset = useScrollViewOffset(animatedRef);

  
  const previousOffset = useDerivedValue(() => {
    const prev = offset.value;
    return prev;
  });

  
  const isHeaderVisible = useDerivedValue(() => {
    const diff = offset.value - previousOffset.value;
    if (offset.value < 1) return true; 
    return diff < 0; 
  });

  
  const headerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(isHeaderVisible.value ? 0 : -100, {
            
            duration: 200,
          }),
        },
      ],
      opacity: withTiming(isHeaderVisible.value ? 1 : 0, { duration: 200 }),
    };
  });

  const image = [
    { image: require("../assets/flipkart.png"), text: "Flipkart" },
    { image: require("../assets/basket.png"), text: "Grocery" },
    { image: require("../assets/travel.png"), text: "Travel" },
    { image: require("../assets/credit-card.png"), text: "Pay" },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.SafeAreaView}>
        <Animated.View style={[styles.Container, headerStyle]}>
          <Button imageSources={image} buttonStyle={styles.button} />
          <TouchableOpacity>
            <Icon></Icon>
          </TouchableOpacity>
        </Animated.View>
        <View style={styles.Container2}>
          <TextInput
            placeholder="Search"
            onChangeText={onSearchText}
            value={search}
            style={styles.TextInput}
          />
        </View>

        <Animated.ScrollView ref={animatedRef}>
          <View style={styles.scrollContent}></View>
        </Animated.ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MainHomeScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },


  
  Container2: {
    flex: 2.5,
    borderWidth: 1,
  
  },
  TextInput1: {
    marginTop:20,
    borderColor: "grey",
    padding: 10,
    borderRadius: 20,
    borderBottomWidth: 1,
    marginHorizontal: 25,
  },
  button: {
    paddingHorizontal: 20,
    
    borderRadius: 15,
    backgroundColor: "#b192ec",
  },
  
  
});
