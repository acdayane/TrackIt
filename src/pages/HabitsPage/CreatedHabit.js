import styled from "styled-components";


export default function CreatedHabit() {

    return (
        <Container>
            
            <BoxHabit>
                "oi"
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
    margin: 10px 0;
    background-color: #FFFFFF;
    height: 91px;
    width: 100%;
    border-radius: 5px;
`