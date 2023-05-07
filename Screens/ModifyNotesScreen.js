import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider,View } from "native-base";
import { TextInput } from "react-native";

const ModifyNotesScreen = () => {
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Modify Note
        </Heading>

        <VStack space={5} mt="5">
         <View>
            <TextInput placeholder="Title" multiline={true} style={{fontSize:30}} maxLength={20}></TextInput>
         </View>
         <View>
            <TextInput placeholder="Description" multiline={true} style={{fontSize:20}} maxLength={200}></TextInput>
         </View>
          <Button mt="2" colorScheme="indigo">
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
    