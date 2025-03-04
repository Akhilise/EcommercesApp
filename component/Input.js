
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  validate,
  animationDelay = 400,
}) => {
  const [error, setError] = useState("");

  const handleValidation = (text) => {
    if (validate) {
      const validationResult = validate(text);
      setError(validationResult.error || "");
    }
    onChangeText(text);
  };

  return (
    <Animated.View
      style={styles.inputContainer}
      entering={FadeInUp.delay(animationDelay).duration(1000).springify()}
    >
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleValidation}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#bec0bf",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#f6f6f6",
    borderRadius: 14,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default Input;
