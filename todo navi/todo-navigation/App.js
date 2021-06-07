import React from 'react';
// import Home from './screens/Home'
// import Abount from './screens/About'
// import Tasks from './screens/Tasks'

import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './routes/MyDrawer';


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}


