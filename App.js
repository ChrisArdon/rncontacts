import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations/index'; //component created
import GlobalProvider from './src/context/Priovider';
const App = () => {
  return(
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
}

export default App;



/*
we are going to use two types of screens
      screen >>> Home >>> Drawer   ===> When the user is not logged in
      screen >>> Auth ===> when the user is logged in

*/