import { useNavigation } from "@react-navigation/native"
import React from "react"
import {Text,TouchableOpacity,View} from "react-native"
const NoteItem=(props)=>{
    const Navigation=useNavigation()
    return (

        <TouchableOpacity onPress={()=>{Navigation.navigate("ModifyNotesScreen")}}style={{width:"90%",backgroundColor:props.color,marginTop:"5%",height:"20%",alignItems:"center",justifyContent:"center",elevation:5,borderRadius:10}}>
            <Text style={{fontSize:30}}>
                Note title Color indicates priority
            </Text>

        </TouchableOpacity>
    )
}
export default NoteItem