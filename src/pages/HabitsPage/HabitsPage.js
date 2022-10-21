import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BoxHabits from "./BoxHabits";
import { useState } from "react";


export default function HabitsPage() {
   
    const [habitCreated, setHabitCreated] = useState(null)

    function createHabit() {
        setHabitCreated("creating")
    }

    return (
        <Container>
            <Header />
            <Main>
                <BoxTitle>

                    <TextTitle>
                        <h1>Meus hábitos</h1>
                        <button onClick={createHabit}>+</button>
                    </TextTitle>

                    {habitCreated !== null &&
                        <BoxHabits />
                    }

                    <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>

                </BoxTitle>
            </Main>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    background-color: #E5E5E5;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`
const Main = styled.div`    
    width: 90%;
    font-family: 'Lexend Deca', sans-serif;
`
const BoxTitle = styled.div`   
    color: #666666;
    margin-top: 100px;  
    width: 100%;
    display: flex;
    flex-direction: column;
h1 { 
    margin-top: 10px;   
    color: #126BA5;
    font-size: 23px;    
}
h2 {
    margin-top: 15px;
    margin-bottom: 10px;
    color: #666666;
    font-size: 18px;
}
`
const TextTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
button {
    border: 1px solid #52B6FF;
    border-radius: 5px;
    width: 35px;
    height: 40px;
    background: #52B6FF;
    color: #FFFFFF;
    font-size: 30px;
    cursor: pointer;
}
`

