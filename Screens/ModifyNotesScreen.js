import * as React from "react";
import {  Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider,View,Select, Box, CheckIcon } from "native-base";
import { TextInput,Alert,ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import {
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { auth } from "../Firebase/Firebase.config";
import { app } from "../Firebase/Firebase.config";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import { useContext } from 'react';
import { DarkModeContext } from "../Context/DarkModeContext";
const ModifyNotesScreen = () => {
  const isDarkModeOn = useContext(DarkModeContext);
  const navigation=useNavigation();
  const [priority, setPriority] = React.useState("");
  const[title,setTitle]=React.useState("")
  const [loading,setLoading]=React.useState(false)
  const[description,setDescription]=React.useState("")
  const {note}=useRoute().params
  const noteId=note.uniqueId
  const UpdateNote = async () => {
    setLoading(true)
    if(title==""){
      Alert.alert("Title cannot be empty")
      setLoading(false)
    }
    else{
    try {
      const db = getFirestore(app);
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error("User not found");
        setLoading(false)
      }
      const userId = currentUser.uid;
      const notesRef = collection(db, "users", userId, "notes");
      const noteDocRef = doc(notesRef, noteId);
      await updateDoc(noteDocRef, {
        title:title,
        description:description,
        priority:priority,
        color:
          priority === "2"
            ? "#FF9E9E"
            : priority === "1"
            ? "#FFF599"
            : "#91F48F",
            uniqueId:noteId // set color based on priority
      });
      Alert.alert("Note updated Successfully")
      setLoading(false)
      navigation.navigate("NotesScreen")
    } catch (error) {
      console.log(error);
    }
  }
  };
  return (
  
  <>
 <StatusBar barStyle={isDarkModeOn?"light-content":"dark-content"}
        backgroundColor={isDarkModeOn?"black":"white"}/>
  <TouchableOpacity onPress={()=>navigation.goBack()} style={{position:"absolute",top:20,alignSelf:"flex-start",padding:"10%"}}>
  <AntDesign name="arrowleft" size={24} color={isDarkModeOn?"white":"black"} />
       </TouchableOpacity>
  <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Text style={{fontSize:21,color:isDarkModeOn?"white":"black"}}>
          Modify Note
        </Text>

        <VStack space={5} mt="5">
         <View>
         <TextInput placeholder="Title" multiline={true} style={{fontSize:30,color:isDarkModeOn?"white":"black"}} maxLength={20} onChangeText={(text)=>setTitle(text)} value={title} placeholderTextColor={"gray"}></TextInput>
         </View>
         <View>
         <TextInput placeholder="Description" multiline={true} style={{fontSize:20,color:isDarkModeOn?"white":"black"}} color={isDarkModeOn?"white":"black"} maxLength={200}onChangeText={(text)=>setDescription(text)} value={description} placeholderTextColor={"gray"}></TextInput>
         </View>
         <Box maxW="300">
        <Select selectedValue={priority} minWidth="200" accessibilityLabel="Choose Priority" placeholder="Choose Priority" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setPriority(itemValue)}>
          <Select.Item label="High" value="2" />
          <Select.Item label="Medium" value="1" />
          <Select.Item label="Low" value="0" />
        </Select>
      </Box>
      {loading?<ActivityIndicator color={"#3897f0"}/>:
          <Button onPress={UpdateNote}mt="2" colorScheme="indigo">
        Modify
          </Button>
}
          
        </VStack>
      </Box>
    </Center>
    </>
    )
};

    export default () => {
      const isDarkModeOn = useContext(DarkModeContext);
        return (
          <NativeBaseProvider>
            <Center bgColor={isDarkModeOn?"black":"white"} flex={1} px="3">
                <ModifyNotesScreen />
            </Center>
          </NativeBaseProvider>
        );
    };
    