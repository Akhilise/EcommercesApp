import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import imagesData from "../util/Data";


const { width, height } = Dimensions.get("window"); 

const ImageSlider = ({navigation,style}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleMainHome = () => {
    navigation.navigate("MainHome");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      scrollRef.current.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  const images=imagesData.images;
  //const images=
  const currentImage = images[currentIndex];

  return (
    <View style={styles.container}>
      
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}
      >
        {images.map((item) => (
          <Image
            key={item.id}
            source={item.img}
            style={style}
            resizeMode="cover"
            
          />
        ))}
      </ScrollView>

      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{currentImage.title}</Text>
        <Text style={styles.description}>{currentImage.description}</Text>
        <View style={styles.View1}>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={handleMainHome}>
            <Text style={styles.text}>Get Started!</Text>
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === currentIndex ? "#fff" : "rgba(255, 255, 255, 0.3)",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    position: "relative",
  },
  scrollView: {
    flex: 1,
  },
  
  textContainer: {
    position: "absolute",

    bottom: 80,
    width: "100%",
    padding: 40,
    backgroundColor: "rgba(0, 0, 0, 0.5)",

    borderWidth: 1,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  description: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  slideNumber: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: "white",
    fontSize: 14,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 3,
  },
  TouchableOpacity: {
    backgroundColor: "#eabf6e",
    alignItems: "center",
    width: "60%", 
    alignSelf: "center", 
    padding: 15,
    borderRadius: 28,
  },
  View1: {
    marginTop: 45,
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "semibold",
  },
});

export default ImageSlider;
