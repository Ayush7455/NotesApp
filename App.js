import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NotesScreen from "./Screens/NotesScreen";
import SearchScreen from "./Screens/SearchScreen";
import AddNoteScreen from "./Screens/AddNoteScreen";
import CustomDrawerHeader from "./Components/CustomDrawerHeader";
import ModifyNotesScreen from "./Screens/ModifyNotesScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import ForgetPasswordScreen from "./Screens/ForgetPasswordScreen";
import NoteContentScreen from "./Screens/NoteContentScreen";
import { DarkModeProvider } from "./Context/DarkModeContext";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = ({ toggleDarkMode }) => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="NotesScreen" component={NotesScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="AddNoteScreen" component={AddNoteScreen} />
      <Stack.Screen name="ModifyNotesScreen" component={ModifyNotesScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
      <Stack.Screen name="NoteContentScreen" component={NoteContentScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };
  return (
    <DarkModeProvider value={isDarkModeOn}>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerHeader {...props} toggleDarkMode={toggleDarkMode}/>}  screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
    </DarkModeProvider>
  );
};

export default App;
