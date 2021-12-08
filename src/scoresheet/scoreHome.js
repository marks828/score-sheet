import { useState } from "react";   

export function ScoreHome(){
    
    const [numberOfPlayersSelected, setNumberOfPlayersSelected] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [numberOfScoreSheets, setNumberOfScoreSheets] = useState(numberOfPlayersSelected);
    
    function handleNumberOfPlayersSelectedSubmit(e){
        e.preventDefault();
        setNumberOfPlayersSelected(e.target.value);
    }

    
    return(
        <>
        <label htmlFor="numberOfPlayersSelected">Number of Players:
            <input
                type="number" 
                name="numberOfPlayersSelected"
                value={inputValue}
                onChange={handleNumberOfPlayersSelectedSubmit}
            />
        </label>
        <h1>Scores:</h1>
        <p>{numberOfPlayersSelected}</p>
        
        </>
    )
}