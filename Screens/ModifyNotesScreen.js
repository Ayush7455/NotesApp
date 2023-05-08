import * as React from "react";
import {  Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider,View,Select, Box, CheckIcon } from "native-base";
import { TextInput,Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { auth } from "../Firebase/Firebase.config";
import { app } from "../Firebase/Firebase.config";


const ModifyNotesScreen = () => {
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
      });
      Alert.alert("Note updated Successfully")
    } catch (error) {
      console.log(error);
    }
  };
  return <Center w="100%">
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
    </Center>;
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
    