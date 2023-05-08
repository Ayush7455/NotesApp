import React from "react"
import { SafeAreaView, StatusBar, TouchableOpacity } from "react-native"
import { View,Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import NoteItem from "../Components/NoteItem"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";

const NotesScreen=()=>{
    const navigation=useNavigation()
    const Drawer = createDrawerNavigator();
    return(

    <SafeAreaView style={{alignItems:"center",height:"100%"}}>
        <StatusBar/>
        <View style={{flexDirection:"row",alignItems:"center",marginBottom:20}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{backgroundColor:"black",height:40,width:40,alignItems:"center",justifyContent:"center",borderRadius:10,marginRight:"5%"}}>
            <Feather name="menu" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{color:"black",fontSize:40,marginRight:"40%"}}>Notes</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("SearchScreen")}} style={{backgroundColor:"black",height:40,width:40,alignItems:"center",justifyContent:"center",borderRadius:10}}>
            <AntDesign name="search1" size={24} color="white" />
            </TouchableOpacity>
           
        </View>
        <NoteItem color="#FF9E9E"/>
        <NoteItem color="#91F48F"/>
        <NoteItem color="#FFF599"/>
        <NoteItem color="#FFF599"/>
        <TouchableOpacity onPress={()=>{navigation.navigate("AddNoteScreen")}} style={{backgroundColor:"black",height:60,width:60,alignItems:"center",justifyContent:"center",borderRadius:30,position:"absolute",bottom:40,right:"6%",elevation:10}}>
        <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>

    </SafeAreaView>
)
}
export default NotesScreen