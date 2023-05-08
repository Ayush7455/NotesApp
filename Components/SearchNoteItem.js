import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import {Text,TouchableOpacity,View} from "react-native"

const SearchNoteItem=({note})=>{
    const noteId=note.uniqueId
    const Navigation=useNavigation()
    return (
        <TouchableOpacity activeOpacity={1} onPress={()=>{Navigation.navigate("NoteContentScreen",{note:note})}}style={{width:360,backgroundColor:note.color,marginTop:"5%",height:150,alignItems:"center",justifyContent:"center",borderRadius:10}}>
            <Text style={{fontSize:30}}>
               {note.title}
            </Text>

        </TouchableOpacity>
    )
}
export default SearchNoteItem