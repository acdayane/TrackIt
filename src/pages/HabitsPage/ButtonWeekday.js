import { useState } from "react";
import styled from "styled-components";

export default function ButtonWeekday({ index, day, daysSelected, setDaysSelected }) {

    const [selected, setSelected] = useState(false)

    function selectDay(index) {

        if (selected === false) {
            daysSelected.push(index);
            const newDaysSelected = [...daysSelected];
            newDaysSelected.sort(compareNumbers);
            setDaysSelected(newDaysSelected);

            function compareNumbers(a, b) {
                return a - b;
            }
        }
        else {
            const newDaysSelected = [...daysSelected]
            newDaysSelected.splice(newDaysSelected.indexOf(index), 1)
            setDaysSelected(newDaysSelected);
        }
        setSelected(!selected);
    }

    return (
        <Weekday isSelected={selected} >
            <button onClick={() => selectDay(index+1)}>{day}</button>
        </Weekday>
    )
}

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