import * as React from "react";
import {  Text, VStack, Button, Center, NativeBaseProvider,View,Box } from "native-base";
import { StatusBar, TextInput, TouchableOpacity } from "react-native";
import { useNavigation ,useRoute} from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { useContext } from 'react';
import { DarkModeContext } from "../Context/DarkModeContext";

const ModifyNotesScreen = () => {
  const isDarkModeOn = useContext(DarkModeContext);
  console.log(isDarkModeOn)
    const navigation=useNavigation()
    const {note}=useRoute().params;
    console.log(note);
  return (
<>
<StatusBar barStyle={isDarkModeOn?"light-content":"dark-content"}
        backgroundColor={isDarkModeOn?"black":"white"}/>
  <TouchableOpacity onPress={()=>navigation.goBack()} style={{position:"absolute",top:20,alignSelf:"flex-start",padding:"10%"}}>
       <AntDesign name="arrowleft" size={24} color={isDarkModeOn?"white":"black"} />
       </TouchableOpacity>
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="300">
       

        <VStack space={5} mt="5">
         <View>
            <Text style={{fontSize:20,fontWeight:"bold",color:isDarkModeOn?"white":"black"}}>{note.title}</Text>
         </View>
         <View>
            <Text style={{color:isDarkModeOn?"white":"black"}}>{note.description}</Text>
         </View>
          <Button onPress={()=>navigation.navigate("ModifyNotesScreen",{note:note})}mt="2" colorScheme="indigo">
        Modify
          </Button>
          
        </VStack>
      </Box>
    </Center>
    </>
  )
}

    export default () => {
      const isDarkModeOn = useContext(DarkModeContext);
        return (
          <NativeBaseProvider>
            <Center flex={1}  bgColor={isDarkModeOn?"black":"white"} px="3">
                <ModifyNotesScreen />
            </Center>
          </NativeBaseProvider>
        )
    }
    