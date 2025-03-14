import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import imagesData from "../util/Data";
import Button from "./Button";

const categoriesData = imagesData.categoriesData;

const chunkArray = (array, chunkSize) => {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) resultArray[chunkIndex] = [];
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
};

const CategoriesData = () => {
  const chunkedData = chunkArray(categoriesData, 2);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {chunkedData.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item) => (
              <View key={item.id} style={styles.card}>
                <Button
                  imageSources={[
                    { image: { uri: item.image_uri }, text: item.name },
                  ]}
                  buttonStyle={styles.image}
                  style={styles.imageIconStyle}
                />
                
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoriesData;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  row: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  card: {
    
    height:110,
    width: 110,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  imageIconStyle: {
    height: 65,
    width: 65,
 
  },

  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    borderWidth: 1,
  },
});
