import {
  Animated,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Button from "../component/Button";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/FontAwesome";
import ToggleSwitch from "./ToggelSwitch";
import SearchBar from "./SearchBar";

const Header_Max_Height = 240;
const Header_Min_Height = 120;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;
const imageData = [
  { image: require("../assets/Images/flipkart.png"), text: "Flipkart" },
  { image: require("../assets/Images/basket.png"), text: "Grocery" },
  { image: require("../assets/Images/travel.png"), text: "Travel" },
  { image: require("../assets/Images/credit-card.png"), text: "Pay" },
];

const DynamicHeader = ({ value, onPress }) => {
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const buttonOpacity = value.interpolate({
    inputRange: [0, Scroll_Distance / 2],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <>
      <Animated.View
        style={[
          styles.header,
          {
            height: animatedHeaderHeight,
          },
        ]}
      >
        <LinearGradient
          colors={["#b130e4", "#ab6fbd", "#f0e9ef"]}
          style={StyleSheet.absoluteFillObject}
        />

        <Animated.View style={{ opacity: buttonOpacity }}>
          <Button imageSources={imageData} buttonStyle={styles.button} />

          <TouchableOpacity style={styles.Address}>
            <Ionicons name="building" size={22} color="black" />
            <Text style={styles.AddressText}>Hii</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={[{ position: "absolute", bottom: 10, left: 15 }]}>
          <ToggleSwitch />
        </View>

        <View
          style={[
            styles.searchContainer,
            { position: "absolute", bottom: 10, left: "25%", right: 15 },
          ]}
        >
          <SearchBar />
        </View>
      </Animated.View>
    </>
  );
};
export default DynamicHeader;

const styles = StyleSheet.create({
  header: {
    //justifyContent: "center",
    paddingTop: 25,
  },
  Address: {
    marginTop: 10,
    //padding:10,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  AddressText: {
    textAlign: "center",
    fontSize: 16,
    marginLeft: 10,
  },

  searchContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#61b3f2",
  },
  TextInput: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  button: {
    paddingHorizontal: 20,
    paddingBottom: 5,
    borderRadius: 15,
    backgroundColor: "#b192ec",
    marginTop: 20,
  },
  View: {
    flex: 1,
  },
  input: {
    flex: 1,
  },
  Switch: {
    marginBottom: 5,
  },
  icon: {
    marginLeft: 10,
    color: "#4b7cf0",
    borderWidth:1,
  },
  icon2: {
    padding:10,
    marginLeft:"90%",
    marginRight: "90%",
    borderWidth:1
  },
  Search:{
    flexDirection:"row",
    borderWidth:1,
  }
  
});
