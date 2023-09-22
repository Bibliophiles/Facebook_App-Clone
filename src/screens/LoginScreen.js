import { View, Image, TextInput, Alert } from 'react-native'
import React, { useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '@rneui/themed'
import { s } from 'react-native-wind'
import Logo from '../assets/images/logo.png'
import MetaLogo from '../assets/images/meta-logo.png'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase'

initializeApp(firebaseConfig);


const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("")

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("MainScreen");
      }
    })
  },[])



  const createNewAccount = () => {
         navigation.navigate("RegisterScreen")
  }

  const Login = () => {
    const auth = getAuth
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Logged in with: ", user.email)
        })
        .catch((error) => {
          if (error.code === 'auth/user-not-found') {
            Alert.alert("Wrong email address", "Make sure you have entered the correct email");
          }
          if (error.code === 'auth/wrong-password') {
            Alert.alert("Wrong password!", "Make sure you have entered the correct password");
          }
          console.error('Error signing in:', error.message);
        })
    }
    else if (email) {
      Alert.alert("Enter password");
    } else if (password) {
      Alert.alert("Enter email");
    } else {
      Alert.alert("Enter email and password");
    }
  }
  
  return (
    <SafeAreaView style={s `p-4 justify-center items-center`}>

      <Button
        title="English (US)"
        type="clear"
        titleStyle={s`text-black`}
        buttonStyle={s `mt-2`}
      />

      <Image
        source={Logo}
        style={s `h-14 w-14 m-20`}
      />

      <TextInput
        placeholder="Mobile number or email"
        autoFocus
        value={email}
        onChangeText={setEmail}
        style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={s`border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
      />

      <View style={s `w-11/12`}>
        <Button
          title="Login"
          onPress={Login}
          buttonStyle={s `rounded-2xl mt-4`}
        />

        <Button
          title="Forgot Password?"
          type="clear"
          titleStyle={s `text-black text-sm`}
          buttonStyle={s `mt-4`}
        />

        <Button
          title="Create new account"
          type="outline"
          buttonStyle={s `rounded-2xl mt-28`}
          onPress={createNewAccount}
        />
      </View>

      <Image
        source={MetaLogo}
        style={s `p-4 h-10 w-1/5 mt-2`}
      />

    </SafeAreaView>
  );
}
export default LoginScreen;

















































































































































































































































































































// import {
//   Alert,
//   View,
//   Image,
//   TextInput,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import Logo from '../assets/images/logo.png';
// import MetaLogo from '../assets/images/meta-logo.png';
// import { Button } from '@rneui/themed';
// import { s } from "react-native-wind";
// import { SafeAreaView } from "react-native-safe-area-context"
// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '../../firebase'

  
// initializeApp(firebaseConfig);


// const LoginScreen = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         navigation.replace("MainScreen");
//       }
//     });
//   }, [])

//   const createNewAccount = () => {
//     navigation.navigate("RegisterScreen")
//   }
//   const Login = () => {
//     const auth = getAuth
//     if (email && password) {
//       signInWithEmailAndPassword(auth, email, password)
//         .then((userCredentials) => {
//           const user = userCredentials.user;
//           console.log("Logged in with: ", user.email)
//         })
//         .catch((error) => {
//           if (error.code === 'auth/user-not-found') {
//             Alert.alert('Wrong email address',"Make sure you have entered the correct email");
//           }
//           if (error.code === 'auth/wrong-password') {
//             Alert.alert('Wrong password!', "Make sure you have entered the correct password");
//           }
//           console.error('Error signing in:', error.message);
//         });
//     } else if (email) {
//       Alert.alert("Enter password")
//     }else if (password) {
//       Alert.alert("Enter email")
//     } else {
//       Alert.alert("Enter email and password");
//     }
//   }

//   return (
     
//     <SafeAreaView style={s`p-4 justify-center items-center`}>

//       <Button
//         title="English (US)"
//         type="clear"
//         titleStyle={s `text-black`}
//         buttonStyle={s `mt-2`}  
//       />
      
//       <Image
//         source={Logo}
//         style={s `h-14 w-14 m-20`}
//       />
        
//       <TextInput
//         placeholder="Mobile number or email"
//         autoFocus
//         value={email}
//         onChangeText={setEmail}
//         style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
//       />

//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
//       />

//       <View style={s `w-11/12`}> 
      
//         <Button
//           title="Log in"
//           onPress={Login}
//           buttonStyle={s `rounded-2xl mt-4`}
//         />
        
//         <Button
//           title="Forgot Password?"
//           titleStyle={ s `text-black text-sm`}
//           type="clear"
//           buttonStyle={s `mt-4`}
//         />
          
//         <Button
//           title="Create new account"
//           type="outline"
//           onPress={createNewAccount}
//           buttonStyle={s `rounded-2xl mt-28`}
//         />
        
//       </View>

//       <Image
//         source={MetaLogo}
//         style={s `p-4 h-10 w-1/5 mt-2`}
//       />

//     </SafeAreaView>
    
//   );
// };

// export default LoginScreen;
