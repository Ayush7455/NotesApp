import {React, useState} from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
} from "native-base";
import {Alert, ActivityIndicator, StatusBar} from "react-native";
import {auth} from "../Firebase/Firebase.config";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation=useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlesignup = () => {
    setLoading(true);
    if (confirmpassword === password) {
      if (email.trim() === "" || password.trim() === "") {
        setLoading(false);
        Alert.alert("Email and password cannot be empty");
        return;
      }
      createUserWithEmailAndPassword(auth, email.trim(), password.trim())
        .then(() => {
          setLoading(false);
          Alert.alert("Successfully Registered");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        })
        .catch((error) => {
          setLoading(false);
          Alert.alert("Error", error.message);
        });
    } else {
      setLoading(false);
      Alert.alert("Password and Confirm Password do not match");
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
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome to Notes App
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              onChangeText={(text) => setEmail(text)}
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmpassword}
            />
          </FormControl>
          {loading ? (
            <ActivityIndicator color={"#3897f0"} />
          ) : (
            <Button mt="2" colorScheme="indigo" onPress={handlesignup}>
              Sign up
            </Button>
          )}
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
        <SignUpScreen />
      </Center>
    </NativeBaseProvider>
  );
};
