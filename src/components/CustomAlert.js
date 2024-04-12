import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const CustomAlert = ({ visible, onClose, button1, button2 }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.alert}>
          <Text style={styles.title}>Alert</Text>
          <Text style={styles.message}>This is a custom alert.</Text>
          <View style={styles.buttons}>
            <Button color={'#000'} backgroundColor={'#000'} title="Cancel" onPress={onClose} />
            <Button color={'#000'} backgroundColor={'#000'} title="OK" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  alert: {
    backgroundColor: '#444',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#fff'
  },
  message: {
    marginBottom: 20,
    color:'#fff'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn:{
    backgroundColor:'#fff'
  }
});

export default CustomAlert;
