import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageSlider from '../component/ImageSlider';

const HomeScreen = ({navigation}) => {
    return (
      <View>
        <ImageSlider navigation={navigation} />
      </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
