import React, { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import NoteItem from "../Components/NoteItem";
import SearchNoteItem from "../Components/SearchNoteItem";
import { Center, useNativeBase } from "native-base";
import { useContext } from 'react';
import { DarkModeContext } from "../Context/DarkModeContext";

const SearchScreen = () => {
    const isDarkModeOn = useContext(DarkModeContext);
    const navigation=useNavigation();
  const { notes } = useRoute().params;
  const [searchInput, setSearchInput] = useState("");

  const filterNotes = () => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  useEffect(() => {
    filterNotes();
  }, [searchInput]);

  const renderItem = ({ item }) => {
    if (searchInput === "") {
      return null;
    }
    if (!item.title.toLowerCase().includes(searchInput.toLowerCase())) {
      return null;
    }
    return <SearchNoteItem note={item} />;
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"}
        backgroundColor="#F0F0F0"/>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignSelf:"flex-start",padding:"2%",marginBottom:"4%",marginTop:"3%"}}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            width: "95%",
            backgroundColor: "#d9dbda",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1, marginRight: 4 }}
          />
          <TextInput
            style={{ fontSize: 15, width: "95%" }}
            onChangeText={(text) => setSearchInput(text)}
            placeholder="Search"
          />
        </View>
        <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.uniqueId}
      />
      </View>
      
    </SafeAreaView>
  );
};

export default SearchScreen;
