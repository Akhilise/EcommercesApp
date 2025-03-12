import React from 'react';
import {  View,StyleSheet,Dimensions } from 'react-native';
import ImageSlider from '../component/ImageSlider';

const { width, height } = Dimensions.get("window"); 
const HomeScreen = ({navigation}) => {
    return (
      <View>
        <ImageSlider navigation={navigation}
        style={styles.Images} />
      </View>
    );
}

const styles=StyleSheet.create({
  Images:{
    width:width,
    height:height
  }
})

export default HomeScreen;
