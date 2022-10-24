import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BoxNewHabit from "./BoxNewHabit";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDataUser } from "../../context/DataUser";
import Habit from "./Habit";

export default function HabitsPage() {

    const [creatingHabit, setCreatingHabit] = useState(false);
    const { token, habitsSaved, setHabitsSaved } = useDataUser();

    function createHabit() {
        setCreatingHabit(true)
    }

    useEffect(() => {
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
    }, [])

    //console.log("habitsSaved", habitsSaved)

    if (habitsSaved === null) {
        return (
            <Loading>
                <img src="http://2.bp.blogspot.com/-2RqriVTKhi4/UNnFBTiuzdI/AAAAAAAALK4/3-UccrBLu7w/s1600/Gif+Carregando+-+PremiumDesign3D+(9).gif" alt={'Carregando...'} />
            </Loading>
        )
    }
    else {
        return (

            <Container>
                <Header />
                <Main>
                    <BoxTitle>
                        <TextTitle>
                            <h1>Meus hábitos</h1>
                            <button onClick={createHabit}>+</button>
                        </TextTitle>

                        {creatingHabit === true &&
                            <BoxNewHabit
                                setCreatingHabit={setCreatingHabit}
                            />
                        }
                        {habitsSaved === [] ? (
                            <h2>Você não tem hábitos cadastrados. Adicione um hábito para começar a trackear!</h2>
                        ) : (
                            <HabitsContainer>
                                {habitsSaved.map((h, i) =>
                                    <Habit
                                        key={i}
                                        id={h.id}
                                        name={h.name}
                                        days={h.days}
                                    />
                                )}
                            </HabitsContainer>
                        )}
                    </BoxTitle>
                </Main>
                <Footer />
            </Container>
        )
    }
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
    margin-bottom: 130px;
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
    margin-bottom: 15px;
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
const HabitsContainer = styled.div`
    width: 100%;
`

