import React from "react"
import {SafeAreaView, StatusBar, Text,TextInput,View} from "react-native"
import { Feather } from '@expo/vector-icons';
const SearchScreen=()=>{
    return(
        <SafeAreaView>
            <StatusBar/>
            <View style={{justifyContent:"center",alignItems:"center",marginTop:"10%"}}>
    <View style={{
        padding:10,
        flexDirection:"row",
        width:"95%",
        backgroundColor:"#d9dbda",
        borderRadius:10,
        alignItems:"center",
    }}>
        <Feather name="search" size={20} color="black"
        style={{marginLeft:1,marginRight:4}} />
        <TextInput style={{fontSize:15,width:"95%"}} placeholder="Search"/>
    </View>
    </View>
    </SafeAreaView>
    )
}
export default SearchScreen