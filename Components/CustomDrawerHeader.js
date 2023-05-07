import React from 'react';
import { View, Text } from 'react-native';
import { Switch, HStack, Center, NativeBaseProvider } from "native-base";
import { Ionicons } from '@expo/vector-icons';

const CustomDrawerHeader = ({ userName }) => {
  return (
    <NativeBaseProvider>
    <View style={{ padding: 16 }}>
      <Text style={{fontSize:40}}>Notes App</Text>
      <Text style={{ fontSize: 20,marginTop:"2%" }}>Welcome, {userName}</Text>
      <HStack alignItems="center" space={4} style={{marginTop:"10%"}}>
      <Ionicons name="moon" size={24} color="black" />
      <Text style={{fontSize:15}}>Dark Mode</Text>
      <Switch size="md" />
    </HStack>
    </View>
    </NativeBaseProvider>
  );
};

export default CustomDrawerHeader;