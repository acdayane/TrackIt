import styled from "styled-components";
import { useDataUser } from "../../context/DataUser";
import axios from "axios";


export default function Habit({ id, name }) {

    const { token, setHabitsSaved } = useDataUser();

    function deleteHabit(id) {

        if (window.confirm("Deseja excluir o item?") === true) {

            let URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + id;
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const promise = axios.delete(URL, config);

            promise.then((res) => {
                alert("Hábito excluído da lista");
                //console.log("delete", res.data)

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
                <BoxTitle>
                    <h1>{name}</h1>
                    <ion-icon onClick={() => deleteHabit(id)} name="trash-outline"></ion-icon>
                </BoxTitle>
                <Weekday>"batata"</Weekday>
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
const BoxTitle = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
h1 {
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
button {
    margin: 10px 0;
    border: 1px solid #D4D4D4; 
    border-radius: 5px; 
    background: ${props => props.isSelected === true ? "#D4D4D4" : "#FFFFFF"};
    color: ${props => props.isSelected === true ? "#FFFFFF" : "#D4D4D4"};
    width: 30px;
    height: 30px;
    font-family:'Lexend Deca', sans-serif;
    font-size: 20px;
    cursor: pointer;
}
`