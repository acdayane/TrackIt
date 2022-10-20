import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function HabitsPage() {


    return (
        <Container>
            <Header />
            <Main>

                <BoxTitle>
                    <TextTitle>
                        <h1>Meus hábitos</h1>
                        <button>+</button>
                    </TextTitle>

                    <BoxHabits>
                        <Habit>
                            <Form>
                                <input>
                                   
                                </input>
                                <input>
                                </input>
                                <button>Cancelar</button>
                                <button type="submit">Salvar</button>
                            </Form>
                        </Habit>
                    </BoxHabits>

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
    margin-top: 25px;
    margin-bottom: 10px;
    color: #666666;
    font-size: 18px;
}
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
const TextTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const BoxHabits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
`
const Habit = styled.div`
    margin-top: 10px;
    background-color: #FFFFFF;
    height: 180px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;

button {
    border: 1px solid #52B6FF;
    border-radius: 5px;
    width: 85px;
    height: 35px;
    background: #52B6FF;
    color: #FFFFFF;
    font-size: 16px;
    cursor: pointer;
}
`