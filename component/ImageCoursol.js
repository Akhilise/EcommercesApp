import React, { useState } from "react";
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import imagesData from "../util/Data";

const { width } = Dimensions.get("window");

const BannerCarousel = ({ navigation }) => {
  const banners = imagesData.banners;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBannerClick = (item) => {
    console.log("Banner clicked:", item.id);
    navigation.navigate("Category", { bannerId: item.id });
  };
  

  return (
    <View style={styles.carouselWrapper}>
      <Carousel
        loop
        width={width * 0.9}
        height={300}
        autoPlay={true}
        mode="parallax"
        
        autoPlayInterval={2500}
        data={banners}
        scrollAnimationDuration={1000}
        onProgressChange={(_, absoluteProgress) =>
          setCurrentIndex(Math.round(absoluteProgress))
        }
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBannerClick(item)}>
            <Image source={item.img} style={styles.image} />
          </TouchableOpacity>
        )}
      />

      <View style={styles.dotsContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentIndex ? "#242121" : "grey" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselWrapper: {
    alignItems: "center",
   
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 15,
   
   
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 5, 
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default BannerCarousel;
