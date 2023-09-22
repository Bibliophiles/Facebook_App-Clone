import { StatusBar } from 'expo-status-bar'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RegisterScreen from './src/screens/RegisterScreen'
import MainScreen from './src/screens/MainScreen'


const Stack = createStackNavigator();
const App = () => {
  return (

    <NavigationContainer>

      <StatusBar style={"auto"} />
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>

    </NavigationContainer>
    

  );

}

export default App;



































































































































































































// import { StatusBar } from 'expo-status-bar';
// import React from 'react'
// import LoginScreen from './src/screens/LoginScreen';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import RegisterScreen from './src/screens/RegisterScreen';
// import MainScreen from './src/screens/MainScreen';
// import { s } from 'react-native-wind';

// const Stack = createStackNavigator();

// const App = () => {

//   return (

//     <NavigationContainer>
      
//       <StatusBar
//         style={s `bg-white`}
//         barStyle="dark-content"
//       />

//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//         <Stack.Screen name="MainScreen" component={MainScreen} />
//       </Stack.Navigator>

//     </NavigationContainer> 
//   )
// }

// export default App;