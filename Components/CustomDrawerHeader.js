import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Switch, HStack, Center, NativeBaseProvider } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { auth } from "../Firebase/Firebase.config"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerHeader = (props) => {
  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setDisplayName(currentUser.email);
    }
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.navigate("LoginScreen");
    }).catch((error) => {
      console.log("Error signing out:", error);
    });
  };


    const handleToggleDarkMode = () => {
      props.toggleDarkMode();
    };


  return (
    <NativeBaseProvider>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 40 }}>Notes App</Text>
        <Text style={{ fontSize: 20, marginTop: "2%" }}>Welcome, {displayName}</Text>
        <HStack alignItems="center" space={4} style={{ marginTop: "10%" }}>
          <Ionicons name="moon" size={24} color="black" />
          <Text style={{ fontSize: 15 }}>Dark Mode</Text>
          <Switch onValueChange={handleToggleDarkMode} size="md" />
        </HStack>
        <TouchableOpacity onPress={handleLogout}>
          <HStack alignItems="center" space={4} style={{ marginTop: "10%" }}>
            <AntDesign name="logout" size={24} color="black" />
            <Text style={{ fontSize: 15 }}>Logout</Text>
          </HStack>
        </TouchableOpacity>
      </View>
    </NativeBaseProvider>
 
  )
}
export default CustomDrawerHeader