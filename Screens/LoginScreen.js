import {React,useState} from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { ActivityIndicator,Alert, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import {auth} from "../Firebase/Firebase.config"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react';
import { DarkModeContext } from "../Context/DarkModeContext";

const LoginScreen = () => {
  const isDarkModeOn = useContext(DarkModeContext);
  console.log(isDarkModeOn)
    const navigation=useNavigation();
    const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[loading,setLoading]=useState(false)
  const handlelogin=()=>{
    setLoading(true)
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      setLoading(false)
      navigation.navigate("NotesScreen")
      setEmail("")
      setPassword("")
    }).catch(error=>{
      setLoading(true)
      if(email=="" && password!=""){
        setLoading(false)
        Alert.alert("Email cannot be empty")
      }
      else if(password=="" && email!=""){
        setLoading(false)
        Alert.alert("Password cannot be empty")
      }
      else if(password=="" || email==""){
        setLoading(false)
        Alert.alert("Email and password cannot be empty")
      }
      else{
        setLoading(false)
      Alert.alert("Invalid User")
  }})
}
  return (
    <>
  <StatusBar barStyle={"dark-content"}
        backgroundColor="#F0F0F0"/>
  <Center w="100%">
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
            <Input onChangeText={(text)=>setEmail(text)} value={email}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password"onChangeText={(text)=>setPassword(text)} value={password} />
            <TouchableOpacity onPress={()=>navigation.navigate("ForgetPasswordScreen")}>
            <Text alignSelf={"flex-end"} style={{marginTop:"2%",color:"#4F46E5"}}>
                Forget Password?
            </Text>
            </TouchableOpacity>
          </FormControl>
          {loading?<ActivityIndicator color={"#3897f0"}/>:
          <Button mt="2" colorScheme="indigo" onPress={handlelogin}>
            Sign in
          </Button>
}
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
    </Center>
    </>
  )
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} bgColor={"white"} px="3">
                <LoginScreen />
            </Center>
          </NativeBaseProvider>
        );
    };
    