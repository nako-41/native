import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import { Actions,Router,Scene } from "react-native-router-flux";




const Home =() => {
   const goToAbout = () => {
     Actions.about();
   }
   return (
     <TouchableOpacity style={{ margin: 128 }} onPress={goToAbout}>
       <Text>This is HOME</Text>
     </TouchableOpacity>
   );
}

const About=() => {
  const goToHome=() => {
    Actions.home();
  };
  return (
    <TouchableOpacity style={{ margin: 128 }} onPress={goToHome}>
    <Text>This is ABOUT!</Text>
  </TouchableOpacity>
  );
}

const App =() => {
  return(
  <Router>
    <Scene key ="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="about" component={About} title="About" />

    </Scene>
  </Router>
  )
}

export default App;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },  
// });
