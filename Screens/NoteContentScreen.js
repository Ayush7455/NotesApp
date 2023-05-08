import * as React from "react";
import {  Text, VStack, Button, Center, NativeBaseProvider,View,Box } from "native-base";
import { StatusBar, TextInput, TouchableOpacity } from "react-native";
import { useNavigation ,useRoute} from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

const ModifyNotesScreen = () => {
    const navigation=useNavigation()
    const [service, setService] = React.useState("");
    const {note}=useRoute().params;
    console.log(note);
  return (
<>
<StatusBar barStyle={"dark-content"}
        backgroundColor="#F0F0F0"/>
  <TouchableOpacity onPress={()=>navigation.goBack()} style={{position:"absolute",top:20,alignSelf:"flex-start",padding:"10%"}}>
       <AntDesign name="arrowleft" size={24} color="black" />
       </TouchableOpacity>
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="300">
       

        <VStack space={5} mt="5">
         <View>
            <Text style={{fontSize:20,fontWeight:"bold"}}>{note.title}</Text>
         </View>
         <View>
            <Text>{note.description}</Text>
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
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <ModifyNotesScreen />
            </Center>
          </NativeBaseProvider>
        )
    }
    