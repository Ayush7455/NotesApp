import * as React from "react";
import {  Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider,View,Select, Box, CheckIcon} from "native-base";
import { Alert, TextInput } from "react-native";
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc ,collection} from "firebase/firestore"; 
import {app} from "../Firebase/Firebase.config"
import {auth} from "../Firebase/Firebase.config"
const AddNoteScreen = () => {
  const [priority, setPriority] = React.useState("")
  const [color, setColor] = React.useState("")
  const [title,setTitle]=React.useState("")
  const[description,setDescription]=React.useState("")
  const handleSaveNote = async () => {
    if(priority==0){
      setColor("#91F48F")
    }
    else if(priority==1){
      setColor("#FFF599")
    }
    else if(priority==2){
      setColor("#FF9E9E")
    }
    try {
      const db = getFirestore(app);
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error("User not found");
      }
      const userId = currentUser.uid;
      const notesRef = collection(db, "users", userId, "notes");
      const newNote = {
        title: title,
        description: description,
        priority: priority,
        color:color
      };
      const docRef = doc(notesRef);
      await setDoc(docRef, newNote);
      Alert.alert("Note added successfully!");
      setTitle("");
      setDescription("");
      setPriority("");
    } catch (error) {
      console.log(error);
    }
  };
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Add Notes
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Organize your thoughts, simplify your life
        </Heading>

        <VStack space={5} mt="5">
         <View>
            <TextInput placeholder="Title" multiline={true} style={{fontSize:30}} maxLength={20} onChangeText={(text)=>setTitle(text)} value={title}></TextInput>
         </View>
         <View>
            <TextInput placeholder="Description" multiline={true} style={{fontSize:20}} maxLength={200}onChangeText={(text)=>setDescription(text)} value={description}></TextInput>
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
          <Button onPress={handleSaveNote} mt="2" colorScheme="indigo">
        Save
          </Button>
          
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <AddNoteScreen />
            </Center>
          </NativeBaseProvider>
        );
    };
    