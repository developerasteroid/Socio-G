import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const CustomAlert = ({ visible, onClose, title = "Alert", message, onCancel, onSuccess, successText= "OK" }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose || onCancel}>
      <View style={styles.container}>
        <View style={styles.alert}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttons}>
            
            <Button style={styles.okBtn} color={'#000'} backgroundColor={'#000'} title={successText} onPress={onSuccess}/>
            { onCancel && <Button color={'#000'} backgroundColor={'#000'} title="Cancel" onPress={onCancel}/> }
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
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  }
  
});

export default CustomAlert;
