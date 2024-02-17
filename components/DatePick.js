import React, { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(Platform.OS === 'ios'); // On iOS, DateTimePicker doesn't auto-dismiss, so you have to handle it manually
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const hideDatePickerModal = () => {
    setShowDatePicker(false);
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Date Picker" onPress={showDatePickerModal} />
      <Text>Date: {selectedDate.toLocaleDateString()}</Text>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display='spinner'
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default MyDatePicker;
