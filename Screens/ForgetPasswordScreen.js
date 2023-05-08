import  {React,useState} from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import {Alert,ActivityIndicator} from "react-native"
import {sendPasswordResetEmail} from "firebase/auth"
import {auth} from "../Firebase/Firebase.config"

const ForgetPasswordScreen = () => {
    const [email,setEmail]=useState("")
  const [loading,setLoading]=useState("")
  const ResetPass=()=>{
    if(email!=""){
      setLoading(true)
      sendPasswordResetEmail(auth,email).then(()=>{
        setLoading(false)
        Alert.alert("Check your Email")
        setEmail("")
      })
      .catch((error)=>{
        setLoading(false)
        Alert.alert("You are not registered")
        setEmail("")
      })
    }
    else{
      setLoading(false)
      Alert.alert("Email cannot be empty")
    }
    
}
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
          Reset your Password
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChangeText={(text)=>setEmail(text)} value={email}/>
          </FormControl>
          {loading?<ActivityIndicator color={"#3897f0"}/>:
          <Button onPress={ResetPass} mt="2" colorScheme="indigo">
            Reset
          </Button>
}
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <ForgetPasswordScreen />
            </Center>
          </NativeBaseProvider>
        );
    };
    