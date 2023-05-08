import * as React from "react";
import {  Text, VStack, Button, Center, NativeBaseProvider,View,Box } from "native-base";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ModifyNotesScreen = () => {
    const navigation=useNavigation()
    const [service, setService] = React.useState("");
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="300">
       

        <VStack space={5} mt="5">
         <View>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Note color indicates the priority</Text>
         </View>
         <View>
            <Text>Notes having high priority will come at the top of the flat list while renderingalsdkfhkalsjdhfkljashdflkasjhdflkasjdhflkajsdhfklasjdhfklasjdhfkasjdhfkasjdfhkasjsdfhlkasjdfhlkasjdhflkasjdhfalksjdxfhcalskjdfhaslkjxhfasmkdfjhjhfsdkjlfahfkjshadfkjahsdkjfhaskjdasjkdhfajsdlhfajksldhfljasdhfljasdhflkasjdfhalskjdfhcaslkjdfhasudjlfjsadhfcfasdfajsdgf</Text>
         </View>
          <Button onPress={()=>navigation.navigate("ModifyNotesScreen")}mt="2" colorScheme="indigo">
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
    