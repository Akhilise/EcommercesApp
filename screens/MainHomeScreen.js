import React, { useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
  
} from "react-native";
import DynamicHeader from "../component/hearder";


const DATA = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const MainHomeScreen = () => {
  const [search, setSearch] = useState("");
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <>
     
      <DynamicHeader
        value={scrollOffsetY}
        search={search}
        setSearch={setSearch}
      />
      <ScrollView
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        {DATA.map((val) => (
          <View key={val.id} style={styles.card}>
            <Text style={styles.subtitle}>{val.id}</Text>
          </View>
        ))}
        <View style={styles.scrollContent} />
      </ScrollView>
    </>
  );
};

export default MainHomeScreen;

const styles = StyleSheet.create({
  
  card: {
    height: 100,
    backgroundColor: "#E6DDC4",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  subtitle: {
    color: "#181D31",
    fontWeight: "bold",
    fontSize: 16,
  },
  scrollContent: {
    height: 500,
  },
  
});
