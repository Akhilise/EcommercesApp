// screens/SignupScreen.js
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
import Animated, { FadeInDown } from "react-native-reanimated";
import Input from "../component/Input";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../component/validator";
import Button from "../component/Button";
import Line from "../component/Line";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState(""); // Fixed variable naming convention

  const handleSignUp = () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const usernameValidation = validateUsername(userName);

    if (
      !emailValidation.error &&
      !passwordValidation.error &&
      !usernameValidation.error
    ) {
      console.log("Sign up attempted with:", { email, password, userName });
      navigation.navigate("Home");
    } else {
      Alert.alert("Validation Error", "Enter Correct Email or Password");
    }
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <ScrollView>
        <View style={styles.view}>
          <View>
            <Image
              source={require("../assets/smoke.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.bells}>
            <Animated.Image
              entering={FadeInDown.delay(200).duration(1000).springify()}
              source={require("../assets/light.png")}
              style={styles.light1}
              resizeMode="contain"
            />
            <Animated.Image
              entering={FadeInDown.delay(400).duration(1000).springify()}
              source={require("../assets/light.png")}
              style={styles.light2}
              resizeMode="contain"
            />
          </View>
        </View>
        <Animated.View
          style={styles.loginForm}
          entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <Animated.Text
            entering={FadeInDown.delay(200).duration(600).springify()}
            style={styles.title}
          >
            Sign Up
          </Animated.Text>

          <Input
            placeholder="Username"
            value={userName}
            onChangeText={setUserName}
            autoCapitalize="none"
            validate={validateUsername}
            animationDelay={400}
          />

          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            validate={validateEmail}
            animationDelay={600}
          />

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            validate={validatePassword}
            animationDelay={800}
          />

          <Animated.View
            entering={FadeInDown.delay(1000).duration(1000).springify()}
          >
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={styles.loginContainer}
            entering={FadeInDown.delay(1200).duration(1000).springify()}
          >
            <Text style={styles.loginText}>Already Have Account?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginButton}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
          <Line>Login Using</Line>
          <View>
            <Button />
          </View>
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
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    width: 390,
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
  loginContainer: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },
  loginText: {
    color: "#666",
  },
  loginButton: {
    color: "blue",
    marginLeft: 5,
    fontWeight: "600",
  },
});
