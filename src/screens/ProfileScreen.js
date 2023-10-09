import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { s } from "react-native-wind";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";
const ProfileScreen = () => {
  const navigation = useNavigation();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={s`flex-1 content-between items-center mt-5`}>
      <Text style={s`text-blue-500 text-lg font-bold`}>
        {/* Email: {auth.currentUser?.email} */}
      </Text>

      <View style={s`mt-32 w-11/12`}>
        <Button
          title="Logout"
          buttonStyle={s`p-3 rounded-2xl mt-32`}
          onPress={signOut}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
