import React from "react";
import { GlobalStyle } from "../src/assets/styles/GlobalStyle";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HabitsPage from "./pages/HabitsPage";
import TodayPage from "./pages/TodayPage";
import HistoryPage from "./pages/HistoryPage";


export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage/>} />
        <Route path="/habitos" element={<HabitsPage/>}/>
        <Route path="/hoje" element={<TodayPage/>}/>
        <Route path="/historico" element={<HistoryPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

    
