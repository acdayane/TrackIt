import React from "react";
import { createContext, useContext, useState } from "react";

const DataContext = createContext(); 

export default function DataProvider({children}){ 

    const [userPhoto, setUserPhoto] = useState(null);
    const [token, setToken] = useState(null);
    const [habitsSaved, setHabitsSaved] = useState(null);

    return (
        <DataContext.Provider value={{userPhoto, setUserPhoto, token, setToken, habitsSaved, setHabitsSaved}}> 
            {children}
        </DataContext.Provider>
    )
}

export function useDataUser() { 

    const context = useContext(DataContext);
    const {userPhoto, setUserPhoto, token, setToken, habitsSaved, setHabitsSaved} = context;

    return (
        {userPhoto, setUserPhoto, token, setToken, habitsSaved, setHabitsSaved}
    )
}
