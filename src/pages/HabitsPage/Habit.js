import styled from "styled-components";
import { useDataUser } from "../../context/DataUser";
import axios from "axios";


export default function Habit({ id, name, days }) {

    const { token, setHabitsSaved } = useDataUser();
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];   

    function deleteHabit(id) {

        if (window.confirm("Deseja excluir o item?") === true) {

            let URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + id;
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const promise = axios.delete(URL, config);

            promise.then((res) => {
                alert("Hábito excluído da lista");

                URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
                const promise = axios.get(URL, config);

                promise.then((res) => {
                    setHabitsSaved(res.data);
                    //console.log(habitsSaved);
                });
                promise.catch((err) => {
                    alert("Ops! Algo deu errado...", err.response.data);
                })

            });
            promise.catch((err) => {
                alert("Ops! Algo deu errado...", err.response.data);
            });
        }
    }

    return (
        <Container>
            <BoxHabit>
                <Title>
                    <h3>{name}</h3>
                    <ion-icon onClick={() => deleteHabit(id)} name="trash-outline"></ion-icon>
                </Title>
                <Weekday >
                    {days.map((d, i) =>
                        <button key={i}>
                            {weekdays[d]}
                        </button>
                    )}
                </Weekday>
            </BoxHabit>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
`
const BoxHabit = styled.div`
    margin: 5px 0;
    background-color: #FFFFFF;
    height: 91px;
    width: 100%;
    border-radius: 5px;    
`
const Title = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
h3 {
    color: #666666;
    font-family:'Lexend Deca', sans-serif;
    font-size: 19px;
} 
ion-icon {
    font-size: 20px;
    cursor: pointer;
}   
`
const Weekday = styled.div`
    display: flex;
    padding: 10px;
button {
    margin: 2px;
    border: 1px solid #D4D4D4; 
    border-radius: 5px; 
    background-color: #D4D4D4;
    color: #FFFFFF;
    width: 30px;
    height: 30px;
    font-family:'Lexend Deca', sans-serif;
    font-size: 20px;
    cursor: pointer;
}
`