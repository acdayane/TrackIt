import styled from "styled-components";
import { useState } from "react";


export default function BoxHabits() {

    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S", "D"];
    const [input, setInput] = useState("");
    const [disable, setDisable] = useState(false)

    function sendHabit(e) {
        e.preventDefault();     
          
    }

    function selectDay(d, i) {
        setDisable(!disable);                    
    }
    
    return (
        <Container>
            <Habit>
                <Form onSubmit={sendHabit}>
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
                            <button disabled={disable} key={i} onClick={() => selectDay({d, i})}>{d}</button>                      
                        ))}
                    </BoxWeekdays>
                    <Buttons>
                        <button>Cancelar</button>
                        <button type="submit">Salvar</button>
                    </Buttons>
                </Form>
            </Habit>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
`
const Habit = styled.div`
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
    font-size: 20px;
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
button {
    margin: 10px 0;
    border: 1px solid #D4D4D4; 
    border-radius: 5px; 
    background: #FFFFFF;
    color: #D4D4D4;
    width: 30px;
    height: 30px;
    font-family:'Lexend Deca', sans-serif;
    font-size: 20px;
    cursor: pointer;
}
`
