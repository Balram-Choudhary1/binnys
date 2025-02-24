import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

type CustomHeaderProps = {
  title: string;
  isBackButton?: boolean;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, isBackButton }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View>
        <Text style={styles.text}>{title}</Text>
        {isBackButton && (
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-circle-outline" size={28} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 30,
    paddingVertical: 8,
    paddingTop: 25,
  },
  text: {
    fontSize: 22,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    color: 'white',
    marginTop:-15
  },
  backButton: {
    position: 'absolute',
    left: -24,
    top: -14,

  },
});

export default CustomHeader;