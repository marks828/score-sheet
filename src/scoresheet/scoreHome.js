import { useState } from "react";   

export function ScoreHome(){
    
    const [numberOfPlayersSelected, setNumberOfPlayersSelected] = useState(0);
    const [inputValue, setInputValue] = useState('');
    
    function handleNumberOfPlayersSelectedSubmit(e){
        e.preventDefault();
        setNumberOfPlayersSelected(e.target.value);
    }

    
    return(
        <>
        <form action="submit" onSubmit={handleNumberOfPlayersSelectedSubmit}>
            <label htmlFor="numberOfPlayersSelected">Number of Players:
                <input
                    type="text" 
                    name="numberOfPlayersSelected"
                    value={numberOfPlayersSelected}
                    onChange={setNumberOfPlayersSelected}
                />
            </label>
        </form>
        <button type="submit" 
            onClick={()=> setNumberOfPlayersSelected(...numberOfPlayersSelected)}>Add Players</button>
        <h1>Scores:</h1>
        <p>{numberOfPlayersSelected}</p>
        
        </>
    )
}