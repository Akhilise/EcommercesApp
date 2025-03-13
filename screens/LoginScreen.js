// screens/LoginScreen.js
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import Input from "../component/Input";
import { validateEmail, validatePassword } from "../component/validator";
import Line from "../component/Line";
import Button from "../component/Button";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const image = [
    require("../assets/SocialImage/instagram.png"),
    require("../assets/SocialImage/search.png"),
    require("../assets/SocialImage/X.png"),
  ];

  const handleLogin = () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    if (!emailValidation.error && !passwordValidation.error) {
      console.log("Login attempted with:", { email, password });
      navigation.navigate("Home");
    } else {
      Alert.alert("Validation Error", "Enter Correct Email or Password");
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <>
      <ScrollView>
        <View style={styles.view}>
          <View>
            <Image
              source={require("../assets/HomeImages/smoke.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.bells}>
            <Animated.Image
              entering={FadeInUp.delay(200).duration(1000).springify()}
              source={require("../assets/HomeImages/light.png")}
              style={styles.light1}
              resizeMode="contain"
            />
            <Animated.Image
              entering={FadeInUp.delay(400).duration(1000).springify()}
              source={require("../assets/HomeImages/light.png")}
              style={styles.light2}
              resizeMode="contain"
            />
          </View>
        </View>
        <Animated.View
          style={styles.loginForm}
          entering={FadeInUp.duration(300).springify()}
        >
          <Animated.Text
            entering={FadeInUp.delay(200).duration(600).springify()}
            style={styles.title}
          >
            Login
          </Animated.Text>

          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            validate={validateEmail}
            animationDelay={400}
          />

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            validate={validatePassword}
            animationDelay={600}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <Animated.View
            style={styles.signUpContainer}
            entering={FadeInUp.delay(1000).duration(1000).springify()}
          >
            <Text style={styles.signUpText}>Create New Account?</Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUpButton}>Sign Up</Text>
            </TouchableOpacity>
          </Animated.View>
          <Line style={styles.Line}>Login Using</Line>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(800).duration(800).springify()}>
          <Button imageSources={image}  />
        </Animated.View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image: {
    height: 500,
    width: 500,
    position: "absolute",
  },
  bells: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  light1: {
    height: 225,
    width: 90,
  },
  light2: {
    height: 160,
    width: 65,
  },
  loginForm: {
    flex: 2,
    
    //justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    width: "99%",
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 35,
    alignItems: "center",
  },
  signUpText: {
    color: "#666",
  },
  signUpButton: {
    color: "blue",
    marginLeft: 5,
    fontWeight: "600",
  },
  Line:{
    flexDirection: "row", alignItems: "center",marginTop:45 
  }
  
  
});
