import React, { useRef, useState } from "react";
import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import DynamicHeader from "../component/hearder";
import ImageCarousel from "../component/ImageCoursol";
import Line from "../component/Line";
import CategoriesData from "../component/CategoriesData";
import RecentViewed from "../component/RecentViewed";

const DATA = Array.from({ length: 100}, (_, i) => ({ id: i + 1 }));

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

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <>
            <View style={styles.Container}>
              <ImageCarousel/>
            </View>
            <Line style={styles.Line} />
<CategoriesData/>
            <Line style={styles.Line} />
            <View style={styles.InnerContainer}>
              <Text style={styles.Title1}>Recent Viewed Store </Text>
              <RecentViewed/>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.subtitle}>{item.id}</Text>
          </View>
        )}
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      />
    </>
  );
};

export default MainHomeScreen;

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    marginHorizontal: 20,
  },
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
  Line: {
    flexDirection: "row",
    alignItems: "center",
    width: "350%",
  },
  InnerContainer: {
    marginHorizontal: 10,
   
  },
  Title1: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
