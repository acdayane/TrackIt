import styled from "styled-components"
import { useDataUser } from "../context/DataUser"
import { useNavigate } from "react-router-dom";


export default function Header() {

    const {userPhoto} = useDataUser();
    const navigate = useNavigate();

    return (
        
        <ContainerHeader>
            <h1 onClick={() => navigate(`/`)}>TrackIt</h1>
            <img src={userPhoto} alt="foto"/>
        </ContainerHeader>
       
    )
}

const ContainerHeader = styled.div`
    background-color: #126BA5;
    width: 100%;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
h1 {
    font-family: 'Playball', cursive;
    color: #FFFFFF;
    font-size: 40px;
    margin-left: 18px;
}
img {
    height: 51px;
    width: 51px;
    border-radius: 50px;
    margin-right: 18px;
}
`
