import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations/index'; //component created
const App = () => {
  return(
    <AppNavContainer></AppNavContainer>
  );
}

export default App;



/*
we are going to use two types of screens
      screen >>> Home >>> Drawer   ===> When the user is not logged in
      screen >>> Auth ===> when the user is logged in

*/