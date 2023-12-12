
import { StyleSheet, Text, View, Image,TextInput, Button,Pressable,Alert,StatusBar } from 'react-native';
import { useState } from "react";
//import Menu from '../../src/components/Menu';
// import logo from './assets/jucar'
//import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import {RootNavigation} from './src/navigation/RootNavigation'
import Navigation from './src/components/Navigation';
import { AuthProvider } from './src/context/AuthContext';



const  App =()=> {
  return(
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}


 export default App