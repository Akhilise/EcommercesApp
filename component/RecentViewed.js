import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";

const RecentViewed = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fatchRecentProduct = async () => {
    const result = await apiService.getProducts();
    if (result.success) {
      setProduct(result.data.slice(0, 8));
    } else {
      setError(result.error);
    }
  };

  useEffect(() => {
    fatchRecentProduct();
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <>
        <View style={styles.Container} >
          {product.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.TouchableOpacity}
              onPress={() => console.log(`item No :${item.id}`)}
            >
              <Image source={{ uri: item.image }} style={styles.Images} />
              <View>
                <Text>{item.category}</Text>
                
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </>
    </ScrollView>
  );
};

export default RecentViewed;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    marginTop:10,
  },
  Images: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
  TouchableOpacity: {
    padding:5,
    marginRight: 15,
    backgroundColor:"white",
    borderWidth:1,
    borderColor:"grey",
    borderRadius:5
  },
});
