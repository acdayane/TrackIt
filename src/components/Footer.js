import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Footer() {


    return (
        <ContainerFooter>

            <Link to="/habitos" style={{ textDecoration: 'none' }}>
                <h1>Hábitos</h1>
            </Link>

            <Link to="/hoje" style={{ textDecoration: 'none' }}>
                <Circle>
                    <h1>Hoje</h1>
                </Circle>
            </Link>

            <Link to="/historico" style={{ textDecoration: 'none' }}>
                <h1>Histórico</h1>
            </Link>

        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
h1 {
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    font-size: 18px;
}
`
const Circle = styled.div`
    background-color: #52B6FF;
    border-radius: 50px;
    height: 91px;
    width: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
h1 {
    color: #FFFFFF;
}
`