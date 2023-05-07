import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const LoginScreen = () => {
    const navigation=useNavigation();
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome to Notes App
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <TouchableOpacity onPress={()=>navigation.navigate("ForgetPasswordScreen")}>
            <Text alignSelf={"flex-end"} style={{marginTop:"2%",color:"#4F46E5"}}>
                Forget Password?
            </Text>
            </TouchableOpacity>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={()=>{navigation.navigate("NotesScreen")}}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("SignUpScreen")}>
            <Text style={{color:"#4F46E5"}}>
                Sign Up
            </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <LoginScreen />
            </Center>
          </NativeBaseProvider>
        );
    };
    