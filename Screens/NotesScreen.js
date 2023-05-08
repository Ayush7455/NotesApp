import React, { useState,useEffect } from "react"
import { SafeAreaView, StatusBar, TouchableOpacity,FlatList} from "react-native"
import { View,Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import NoteItem from "../Components/NoteItem"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc ,getDocs,collection,deleteDoc} from "firebase/firestore"; 
import {app} from "../Firebase/Firebase.config"
import {auth} from "../Firebase/Firebase.config"
import { useContext } from 'react';
import { DarkModeContext } from "../Context/DarkModeContext";

const NotesScreen=()=>{
  const isDarkModeOn = useContext(DarkModeContext);
    const navigation=useNavigation()
    const Drawer = createDrawerNavigator();
    const [notes, setNotes] = useState([]);
    
  
    useEffect(() => {
        const fetchNotes = async () => {
            const db = getFirestore(app);
            const currentUser = auth.currentUser;
          if (!currentUser) return;
    
          const userId = currentUser.uid;
          const notesRef = collection(db, 'users', userId, 'notes');
          const notesSnapshot = await getDocs(notesRef);
          const notesData = notesSnapshot.docs.map(doc => doc.data());
          const sortedNotesData = notesData.sort((a, b) => b.priority - a.priority);
            setNotes(sortedNotesData);
          
        };
    
        fetchNotes();
      });

    return(

    <SafeAreaView style={{alignItems:"center",height:"100%"}}>
       <StatusBar barStyle={"dark-content"}
        backgroundColor="#F0F0F0"/>
        <View style={{flexDirection:"row",alignItems:"center",marginBottom:20}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{backgroundColor:"black",height:40,width:40,alignItems:"center",justifyContent:"center",borderRadius:10,marginRight:"5%"}}>
        <Entypo name="menu" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{color:"black",fontSize:40,marginRight:"40%"}}>Notes</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("SearchScreen",{notes:notes})}} style={{backgroundColor:"black",height:40,width:40,alignItems:"center",justifyContent:"center",borderRadius:10}}>
            <AntDesign name="search1" size={24} color="white" />
            </TouchableOpacity>
           
        </View>
        <FlatList
        data={notes}
        renderItem={({item}) => <NoteItem note={item}/>}
        keyExtractor={item => item.uniqueId}
      />
        <TouchableOpacity onPress={()=>{navigation.navigate("AddNoteScreen")}} style={{backgroundColor:"black",height:60,width:60,alignItems:"center",justifyContent:"center",borderRadius:30,position:"absolute",bottom:40,right:"6%",elevation:10}}>
        <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>

    </SafeAreaView>
)
}
export default NotesScreen