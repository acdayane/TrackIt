import styled from "styled-components";
import axios from "axios";
import ButtonWeekday from "./ButtonWeekday"
import { useDataUser } from "../../context/DataUser";
import { useState } from "react";


export default function BoxNewHabit({ setCreatingHabit }) {

    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const { token, setHabitsSaved } = useDataUser();
    const [input, setInput] = useState("");
    const [daysSelected, setDaysSelected] = useState([]);

    function saveHabit() {

        const body = { name: input, days: daysSelected };
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);

        promise.then((res) => {
            setInput("");
            setCreatingHabit(false);

            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            const promise = axios.get(URL, config);

            promise.then((res) => {
                setHabitsSaved(res.data);
            });
            promise.catch((err) => {
                alert("Ops! Algo deu errado...", err.response.data);
            });
        })
        promise.catch((err) => {
            alert("Ops! Algo deu errado...", err.response.data);
        })

    }

    function cancelHabit() {
        setCreatingHabit(false);
    }

    return (
        <Container>
            <NewHabit>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        name="habit"
                        value={input}
                        maxLength="50"
                        onChange={e => setInput(e.target.value)}
                        required
                    />
                    <BoxWeekdays>
                        {weekdays.map((d, i) => (
                            <ButtonWeekday
                                key={i}
                                index={i}
                                day={d}
                                daysSelected={daysSelected}
                                setDaysSelected={setDaysSelected}
                            />
                        ))}
                    </BoxWeekdays>
                    <Buttons>
                        <button onClick={cancelHabit}>Cancelar</button>
                        <button onClick={saveHabit}>Salvar</button>
                    </Buttons>
                </Form>
            </NewHabit>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
`
const NewHabit = styled.div`
    margin: 10px 0;
    background-color: #FFFFFF;
    height: 180px;
    width: 100%;
    border-radius: 5px;
`
const Form = styled.form`
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
input {
    width: 90%;
    height: 30px;
    border: 1px solid #D4D4D4; 
    border-radius: 5px; 
    background: #FFFFFF;
    color: #666666;
    font-family:'Lexend Deca', sans-serif;
    font-size: 19px;
}
`
const Buttons = styled.div`
    width: 90%;
    display: flex;
    justify-content: right;
button {
    margin-top: 15px;
    border-radius: 5px;
    width: 85px;
    height: 35px;
    font-family:'Lexend Deca', sans-serif;
    font-size: 16px;
    cursor: pointer;
}
button:nth-child(odd) {
    border: 1px solid #FFFFFF;  
    background: #FFFFFF;
    color: #52B6FF;
    margin-right: 10px;
}
button:nth-child(even)  {
    border: 1px solid #52B6FF;
    background: #52B6FF;
    color: #FFFFFF;
}
`
const BoxWeekdays = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
