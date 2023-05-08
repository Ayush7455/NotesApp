import * as React from "react";
import {  Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider,View,Select, Box, CheckIcon } from "native-base";
import { TextInput } from "react-native";

const ModifyNotesScreen = () => {
  const [service, setService] = React.useState("");
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
         <Box maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Priority" placeholder="Choose Priority" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="High" value="ux" />
          <Select.Item label="Medium" value="web" />
          <Select.Item label="Low" value="cross" />
        </Select>
      </Box>
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
    