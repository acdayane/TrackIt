import React from "react";
import { createContext, useContext, useState } from "react";

const DataContext = createContext(); //inicializa 

export default function DataProvider({children}){  //provê para os filhos

    const [dataUser, setDataUser] = useState(null);

    // encaminha o valor
    return (
        <DataContext.Provider value={{dataUser, setDataUser}}> 
            {children}
        </DataContext.Provider>
    )
}

export function useDataUser() { //desestrutura para usar o valor

    const context = useContext(DataContext);
    const {dataUser, setDataUser} = context;

    return (
        {dataUser, setDataUser}
    )
}