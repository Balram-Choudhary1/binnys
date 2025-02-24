import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface CustomDatePickerProps {
  date: Date;
  onChange: (selectedDate: Date) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ date, onChange }) => {
  const [show, setShow] = useState(false);

  const handleChange = (_event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Due Date</Text>
      <TouchableOpacity onPress={() => setShow(true)} style={styles.dateButton}>
        <Text style={styles.dateText}>{date.toDateString()}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  dateButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#000301',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
  },
});

export default CustomDatePicker;
