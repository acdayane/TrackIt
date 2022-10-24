import { useDataUser } from "../../context/DataUser";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HabitToday from "./HabitToday";


export default function TodayPage() {

    const { token } = useDataUser();
    const [todayList, setTodayList] = useState(null);

    var date = new Date();
    const week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var weekday = week[date.getDay()];
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var todaysDate = weekday + ', ' + day + '/' + month;

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const promise = axios.get(URL, config);

        promise.then((res) => {
            setTodayList(res.data);
            //console.log('todayList', todayList)
        });
        promise.catch((err) => {
            alert("Ops! Algo deu errado...", err.response.data);
        });
    }, [])

    if (todayList === null) {
        return (
            <Loading>
                <img src="http://2.bp.blogspot.com/-2RqriVTKhi4/UNnFBTiuzdI/AAAAAAAALK4/3-UccrBLu7w/s1600/Gif+Carregando+-+PremiumDesign3D+(9).gif" alt={'Carregando...'} />
            </Loading>
        )
    }

    return (
        <Container>
            <Header />
            <Main>
                {todayList === [] ? (
                    <BoxHabits>
                        <h1>Vamos criar um novo hábito?</h1>
                        <h2>Nenhum hábito concluído ainda</h2>
                    </BoxHabits>
                ) : (
                    <BoxHabits>
                        <h1>{todaysDate}</h1>
                        {todayList.map((h, i) => (
                            <HabitToday                      
                                key={i}
                                id={h.id}
                                name={h.name}
                                done={h.done}
                                currentSequence={h.currentSequence}
                                highestSequence={h.highestSequence}
                            />
                        ))}
                    </BoxHabits>
                )}
            </Main>
            <Footer />
        </Container >
    )
}

const Loading = styled.div`
img {
    width: 100%;
}
`
const Container = styled.div`
    background-color: #E5E5E5;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`
const Main = styled.div`    
    width: 90%;
    margin-top: 115px;
    font-family: 'Lexend Deca', sans-serif;
h1 {   
    color: #126BA5;
    font-size: 23px;    
}
h2 {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #BABABA;
    font-size: 18px;
}
`
const BoxHabits = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 130px;
`

