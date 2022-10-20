import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function HistoryPage() {


    return (
        <Container>
            <Header />
            <Main>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
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
    margin-top: 115px;
    color: #126BA5;
    font-size: 23px;    
}
h2 {
    margin-top: 15px;
    margin-bottom: 10px;
    color: #BABABA;
    font-size: 18px;
}
`

