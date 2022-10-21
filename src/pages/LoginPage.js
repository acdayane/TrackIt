import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDataUser } from "../context/DataUser";

export default function LoginPage() {

    const {setDataUser} = useDataUser();   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function sendLogin(e) {

        e.preventDefault();

        const body = { email, password };
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
       
        promise.then((res) => {        
            setDataUser(res.data.image);              
            navigate(`/hoje`);
        })
 
        promise.catch((err) => {
            alert(err.response.data);
        })
    }

    return (
        <Container>

            <img src={logo} alt="logo" />

            <form onSubmit={sendLogin}>
                <input
                    type="email"
                    placeholder="e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Entrar</button>
            </form>

            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
p {
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    font-size: 14px; 
    margin-top: 18px;
    text-decoration-line: underline;
}    
form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}
input {
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    margin-top: 8px;
    color: #666666;
    font-family:'Lexend Deca', sans-serif;
    font-size: 18px;
}
input::placeholder {
    font-family: 'Lexend Deca', sans-serif;
    color: #D5D5D5;
    font-size: 18px;
}
button {
    border: 1px solid #52B6FF;
    border-radius: 5px;
    width: 308px;
    height: 45px;
    background: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    color: #FFFFFF;
    font-size: 21px;
    margin-top: 13px;
    cursor: pointer;
}
`