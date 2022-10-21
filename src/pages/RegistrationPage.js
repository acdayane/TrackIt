import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


export default function RegistrationPage() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");    
    const navigate = useNavigate();


    function sendRegistration(e) {

        e.preventDefault();

        const body = { email, password, name, image };
        //console.log(body)

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        promise.then((res) => {
            console.log(res.data);
            navigate(`/hoje`);
        })
        promise.catch((err) => {
            console.log(err.response.data);
        })
    }

    return (

        <Container>

            <img src={logo} alt={logo} />

            <form onSubmit={sendRegistration}>
                <input
                    type="email"
                    placeholder="e-mail"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="nome"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="URL"
                    placeholder="foto"
                    id="image"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <p>Já tem uma conta? Faça login!</p>
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