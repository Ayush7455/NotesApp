import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import {Text,TouchableOpacity,View} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { deleteDoc,collection,doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { auth } from "../Firebase/Firebase.config";
import {app} from "../Firebase/Firebase.config"
const NoteItem=({note})=>{
    const noteId=note.uniqueId
    const Navigation=useNavigation()
    const deleteNote = async () => {
        try {
          const db = getFirestore(app);
          const currentUser = auth.currentUser;
          if (!currentUser) {
            throw new Error("User not found");
          }
          const userId = currentUser.uid;
          const notesRef = collection(db, "users", userId, "notes");
          const noteDocRef = doc(notesRef, noteId);
          await deleteDoc(noteDocRef);
          console.log("Note deleted successfully!");
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <TouchableOpacity activeOpacity={1} onPress={()=>{Navigation.navigate("NoteContentScreen")}}style={{width:360,backgroundColor:note.color,marginTop:"5%",height:150,alignItems:"center",justifyContent:"center",borderRadius:10}}>
            <Text style={{fontSize:30}}>
               {note.title}
            </Text>
            <TouchableOpacity onPress={deleteNote} style={{alignSelf:"flex-end",top:"20%"}}>
            <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>

        </TouchableOpacity>
    )
}
export default NoteItem