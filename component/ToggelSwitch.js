import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native-switch";

const ToggelSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Brand Mall</Text>
      <View>
        <Switch
          activeText="On"
          inActiveText="Off"
          onValueChange={toggleSwitch}
          value={isEnabled}
          disabled={false}
          circleSize={26}
          switchWidthMultiplier={2.2}
          switchBorderRadius={18}
          backgroundActive={"#141313"}
          backgroundInactive={"#aca9a9"}
          barHeight={29}
          switchLeftPx={6}
          switchRightPx={7}
        />
      </View>
    </View>
  );
};

export default ToggelSwitch;

const styles = StyleSheet.create({
container:{
alignItems:"center"
},

  Text: {
    marginBottom: 2,
    textAlign: "center",
    fontWeight: "bold",
  },
});
