import { useNavigation } from "@react-navigation/native"
import React from "react"
import {Text,TouchableOpacity,View} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
const NoteItem=(props)=>{
    const Navigation=useNavigation()
    return (

        <TouchableOpacity activeOpacity={1} onPress={()=>{Navigation.navigate("NoteContentScreen")}}style={{width:"90%",backgroundColor:props.color,marginTop:"5%",height:"20%",alignItems:"center",justifyContent:"center",elevation:5,borderRadius:10}}>
            <Text style={{fontSize:30}}>
                Note title Color indicates priority
            </Text>
            <TouchableOpacity style={{alignSelf:"flex-end",padding:10}}>
            <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>

        </TouchableOpacity>
    )
}
export default NoteItem