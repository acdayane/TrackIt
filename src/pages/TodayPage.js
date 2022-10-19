import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function TodayPage() {


    return (
        <Container>
            <Header />
            <Main>
                <h1>....</h1>
                <h2>Nenhum hábito concluído ainda</h2>
                <BoxHabits>
                    <Habit>
                        <HabitText>
                            <h3>oioioio</h3>
                            <p>paragrafo</p>
                            <p>paragrafo</p>
                        </HabitText>
                        <ion-icon name="checkbox"></ion-icon>
                    </Habit>
                </BoxHabits>
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
h1 {    
    margin-top: 100px;
    color: #126BA5;
    font-size: 23px;    
}
h2 {
    margin-top: 5px;
    margin-bottom: 10px;
    color: #BABABA;
    font-size: 18px;
}
`
const BoxHabits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Habit = styled.div`
    margin-top: 10px;
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
