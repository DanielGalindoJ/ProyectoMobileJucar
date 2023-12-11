import React, {createContext, useState} from "react";
import axios from "axios";
import { Base_url } from "../confi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({})
    const [isLoading, setIsLoading] = useState(null)

    const register = (usuario, contraseña) => {
        setIsLoading(true)
    };

    const login = (usuario, contraseña) => {
        setIsLoading(true)
        axios.post(`${Base_url}/signin`,{
            "usuario" : usuario,
            "contraseña" : contraseña
        }).then(res =>{
            let userInfo = res.data;
            console.log(userInfo)
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false)
            console.log(userInfo)
        })
        .catch(e =>{
            console.log(`register error ${e}`)
            setIsLoading(false)
        })
    }
        
    
    return ( 
        <AuthContext.Provider value={{register,isLoading,userInfo,login
        }}>{children}</AuthContext.Provider>
    )
}