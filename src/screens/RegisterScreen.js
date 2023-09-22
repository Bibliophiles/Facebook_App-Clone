import { View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '@rneui/themed'
import { s } from 'react-native-wind'
import Logo from '../assets/images/logo.png'
import MetaLogo from '../assets/images/meta-logo.png'
import { Ionicons } from '@expo/vector-icons'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const RegisterScreen = ({navigation}) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const HasAccount = () => {
    navigation.navigate("LoginScreen")
  } 

  const createAccount = () => {
    const auth = getAuth();
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match.");
      return;
    }
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Successfully created an account with: ", user.email);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert("Already existing email","That email address is already in use!");
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert("Invalid email","That email address is invalid!");
        }
        console.error("Error creating account", error.message);
      });
    } else {
      Alert.alert("Missing data","Kindly fill in details in all input fields!");
    }
  };
 


  return (
    <SafeAreaView style={s `p-4`}>
      <TouchableOpacity>
        <Ionicons
          name="arrow-back"
          size={30}
          color="black"
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </TouchableOpacity>  

      <View style={s`justify-center items-center`}>
        
      <Image
        source={Logo}
        style={s `h-14 w-14 m-16`}
      />

      <TextInput
        placeholder="Full Name"
        autoFocus
        value={fullname}
        onChangeText={setFullname}
        style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
      />

      <TextInput
        placeholder="Mobile number or email"
        value={email}
        onChangeText={setEmail}
        style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
        />

        
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
      />
        
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
      />
        
        <View style={s `w-11/12`}>

          <Button
            title="Create Account"
            buttonStyle={s`rounded-2xl mt-6`}
            onPress={createAccount}
          />

          <Button
            title="Already have an account?"
            type="outline"
            buttonStyle={s`rounded-2xl mt-16`}
            onPress={HasAccount}
          />
        </View>
        
        <Image
        source={MetaLogo}
        style={s `p-4 h-10 w-1/5 mt-2`}
      />

      </View>
   </SafeAreaView>

  );
}

export default RegisterScreen;















































































































































































































































































// import {
//   Alert,
//   View,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';
// import Logo from '../assets/images/logo.png';
// import MetaLogo from '../assets/images/meta-logo.png';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Button } from '@rneui/themed';
// import { s } from "react-native-wind";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

// const RegisterScreen = ({navigation}) => {
//   const [fullname, setFullname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const HasAccount = () => {
//     navigation.navigate('LoginScreen');
//   };

//   const createAccount = () => {
//     const auth = getAuth();
//     if (password !== confirmPassword) {
//       Alert.alert("Passwords do not match.");
//       return;
//     }
//     if (email && password) {
//       createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredentials) => {
//         const user = userCredentials.user;
//         console.log("Successfully created an account with: ", user.email);
//       })
//       .catch((error) => {
//         if (error.code === 'auth/email-already-in-use') {
//           Alert.alert("Already existing email","That email address is already in use!");
//         }
//         if (error.code === 'auth/invalid-email') {
//           Alert.alert("Invalid email","That email address is invalid!");
//         }
//         console.error("Error creating account", error.message);
//       });
//     } else {
//       Alert.alert("Missing data","Kindly fill in details in all input fields!");
//     }
//   };
 


//   return (
//     <SafeAreaView style={s `p-4`}>
//         <TouchableOpacity>
//           <Ionicons
//             name="arrow-back"
//             size={30}
//             color="black"
//             onPress={() => navigation.navigate("LoginScreen")}
//           />
//         </TouchableOpacity>
      
//       <View style={s `justify-center items-center`}>
       
//         <Image
//           source={Logo}
//           style={s `h-14 w-14 m-16`}
//         />

//         <TextInput
//           placeholder="Full Name"
//           autoFocus
//           value={fullname}
//           onChangeText={setFullname}
//           style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
//         />

//         <TextInput
//           placeholder="Mobile number or email"
//           value={email}
//           onChangeText={setEmail}
//           style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
//         />

//         <TextInput
//           placeholder="Password"
//           secureTextEntry
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
//         />

//         <TextInput
//           placeholder="Confirm Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//           style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
//         />

//         <View style={s `w-11/12`}> 
          
//           <Button
//             title="Create Account"
//             onPress={createAccount}
//             buttonStyle={s `rounded-2xl mt-6`}
//           />

//           <Button
//             title="Already have an account?"
//             type="outline"
//             buttonStyle={s `rounded-2xl mt-16`}
//             onPress={HasAccount}
//           />
          
//         </View>
        
//         <Image
//           source={MetaLogo}
//           style={s `p-4 h-10 w-1/5 mt-2`}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default RegisterScreen;
















































































































































































































































































































































































































































































































































































































































// import {
//   Alert,
//   View,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';
// import Logo from '../assets/images/logo.png';
// import MetaLogo from '../assets/images/meta-logo.png';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Button } from '@rneui/themed';
// import { s } from "react-native-wind";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

// const RegisterScreen = ({navigation}) => {
//   const [fullname, setFullname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const HasAccount = () => {
//     navigation.navigate('LoginScreen');
//   };

//   const createAccount = () => {
//     const auth = getAuth();
//     if (password !== confirmPassword) {
//       Alert.alert("Passwords do not match.");
//       return;
//     }
//     if (email && password) {
//       createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredentials) => {
//         const user = userCredentials.user;
//         console.log("Successfully created an account with: ", user.email);
//       })
//       .catch((error) => {
//         if (error.code === 'auth/email-already-in-use') {
//           Alert.alert("Already existing email","That email address is already in use!");
//         }
//         if (error.code === 'auth/invalid-email') {
//           Alert.alert("Invalid email","That email address is invalid!");
//         }
//         console.error("Error creating account", error.message);
//       });
//     } else {
//       Alert.alert("Missing data","Kindly fill in details in all input fields!");
//     }
//   };
 


//   return (
//     <SafeAreaView style={s `p-4`}>
//         <TouchableOpacity>
//           <Ionicons
//             name="arrow-back"
//             size={30}
//             color="black"
//             onPress={() => navigation.navigate("LoginScreen")}
//           />
//         </TouchableOpacity>
      
//       <View style={s `justify-center items-center`}>
       
//         <Image
//           source={Logo}
//           style={s `h-14 w-14 m-16`}
//         />

//         <TextInput
//           placeholder="Full Name"
//           autoFocus
//           value={fullname}
//           onChangeText={setFullname}
//           style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
//         />

//         <TextInput
//           placeholder="Mobile number or email"
//           value={email}
//           onChangeText={setEmail}
//           style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
//         />

//         <TextInput
//           placeholder="Password"
//           secureTextEntry
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
//         />

//         <TextInput
//           placeholder="Confirm Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//           style={s `border border-gray-400 p-3 rounded-xl w-11/12 mt-3`}
//         />

//         <View style={s `w-11/12`}> 
          
//           <Button
//             title="Create Account"
//             onPress={createAccount}
//             buttonStyle={s `rounded-2xl mt-6`}
//           />

//           <Button
//             title="Already have an account?"
//             type="outline"
//             buttonStyle={s `rounded-2xl mt-16`}
//             onPress={HasAccount}
//           />
          
//         </View>
        
//         <Image
//           source={MetaLogo}
//           style={s `p-4 h-10 w-1/5 mt-2`}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default RegisterScreen;
