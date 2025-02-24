import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
    paddingHorizontal: 170,
  },
  text: {
    fontSize: 20,
    fontWeight: '600', // Fixed fontWeight type issue (it should be a string)
    color: '#fff',
  },
});

export default CustomButton;
