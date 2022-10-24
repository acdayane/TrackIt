import styled from "styled-components";
import { useState } from "react";
import { useDataUser } from "../../context/DataUser";
import axios from "axios";

export default function HabitToday({ id, name, done, currentSequence, highestSequence}){

    const { token } = useDataUser();
    const [clicked, setClicked] = useState(false);

    function checkHabit(id) {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + id + "/check";
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const promise = axios.get(URL, config);
        promise.then((res) => {
            setClicked(!clicked);
            console.log("clicked", res.data);
        });
        promise.catch((err) => {
            alert("Ops! Algo deu errado...", err.response.data);
        });
    }

    return (

        <Habit>
            <HabitText>
                <h3>{name}</h3>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu record: {highestSequence} dias</p>
            </HabitText>
            <ion-icon isClicked={clicked} onClick={() => checkHabit(id)} name="checkbox"></ion-icon>
        </Habit>

    )
}

const Habit = styled.div`
    margin-top: 15px;
    background-color: #FFFFFF;
    height: 94px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
ion-icon {
    width: 69px;
    height: 69px;
    margin-right: 10px;
    color: #BABABA; 
    cursor: pointer;
}
`
const HabitText = styled.div`
    height: 100%;
    color: #666666;
    margin: 5px;
h3 {
    font-size: 20px;
    margin: 10px;
}
p {
    font-size: 13px;
    line-height: 17px;
    margin-left: 10px;
}    
`