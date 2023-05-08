import * as React from "react";
import {  Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider,View,Select, Box, CheckIcon } from "native-base";
import { TextInput,Alert } from "react-native";
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


const ModifyNotesScreen = () => {
  const navigation=useNavigation();
  const [priority, setPriority] = React.useState("");
  const[title,setTitle]=React.useState("")
  const[description,setDescription]=React.useState("")
  const {note}=useRoute().params
  const noteId=note.uniqueId
  const UpdateNote = async () => {
    try {
      const db = getFirestore(app);
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error("User not found");
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
      navigation.navigate("NotesScreen")
    } catch (error) {
      console.log(error);
    }
  };
  return (
  
  <>
  <StatusBar barStyle={"dark-content"}
        backgroundColor="#F0F0F0"/>
  <TouchableOpacity onPress={()=>navigation.goBack()} style={{position:"absolute",top:20,alignSelf:"flex-start",padding:"10%"}}>
       <AntDesign name="arrowleft" size={24} color="black" />
       </TouchableOpacity>
  <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Modify Note
        </Heading>

        <VStack space={5} mt="5">
         <View>
            <TextInput placeholder="Title" multiline={true} style={{fontSize:30}} maxLength={20} onChangeText={(text)=>setTitle(text)}></TextInput>
         </View>
         <View>
            <TextInput placeholder="Description" multiline={true} style={{fontSize:20}} maxLength={200}onChangeText={(text)=>setDescription(text)}></TextInput>
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
          <Button onPress={UpdateNote}mt="2" colorScheme="indigo">
        Modify
          </Button>
          
        </VStack>
      </Box>
    </Center>
    </>
    )
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <ModifyNotesScreen />
            </Center>
          </NativeBaseProvider>
        );
    };
    