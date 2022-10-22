import React from "react";
import { createContext, useContext, useState } from "react";

const DataContext = createContext(); //inicializa 

export default function DataProvider({children}){  //provê para os filhos

    const [userPhoto, setUserPhoto] = useState(null);
    const [token, setToken] = useState(null);

    // encaminha o valor
    return (
        <DataContext.Provider value={{userPhoto, setUserPhoto, token, setToken}}> 
            {children}
        </DataContext.Provider>
    )
}

export function useDataUser() { //desestrutura para usar o valor

    const context = useContext(DataContext);
    const {userPhoto, setUserPhoto, token, setToken} = context;

    return (
        {userPhoto, setUserPhoto, token, setToken}
    )
}
