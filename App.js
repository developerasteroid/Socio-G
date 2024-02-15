import {StyleSheet, View, StatusBar, useColorScheme} from 'react-native';




// put your import line below












//end of import line



export default function App() {
  
  // const isDarkMode = useColorScheme() === 'dark';
  StatusBar.setBackgroundColor('#000000');
  

  

  return (
    <>
    <StatusBar/>
    <View style={styles.safeContainer}>
      <View style={[styles.mainContainer]}>

      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    
  },
  mainContainerColorLight:{
    backgroundColor:'#ffffff',
  },
  mainContainerColorDark:{
    backgroundColor:'#000000',
  },
  mainContainer: {
    height: '100%',
    backgroundColor:'#ffffff'
  }
});
