import * as React from "react";
import {  Text, VStack, Button, Center, NativeBaseProvider,View,Box } from "native-base";
import { TextInput } from "react-native";
import { useNavigation ,useRoute} from "@react-navigation/native";

const ModifyNotesScreen = () => {
    const navigation=useNavigation()
    const [service, setService] = React.useState("");
    const {note}=useRoute().params;
    console.log(note);
  return <Center w="100%">
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
    