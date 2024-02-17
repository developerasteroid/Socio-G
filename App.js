import {StyleSheet, View, StatusBar, useColorScheme} from 'react-native';




// put your import line below
import Signup from './components/Signup';











//end of import line



export default function App() {
  
  // const isDarkMode = useColorScheme() === 'dark';
  
  

  

  return (
    <>
    <StatusBar/>
    <View style={styles.safeContainer}>
      <View style={[styles.mainContainer]}>
        <Signup/>
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
