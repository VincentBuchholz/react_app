import React, {useEffect, useState} from 'react';

const CreateDrink = ({createDrink}) => {
    const initialState = {strDrink: "", strInstructions: "", strDrinkThumb: ""};
    const [drink, setDrink] = useState(initialState);
    //setDrink(initialState)


    const handleInput = (event) => {
        const target = event.target
        const id = target.id
        const value = target.value
        setDrink({...drink, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createDrink(drink);
        setDrink(initialState);
    }

    return (
        <>
            <form onChange={handleInput} onSubmit={handleSubmit}>
                <h3>Create drink:</h3>
                <input type={"text"} id="strDrink" value={drink.strDrink} placeholder="Drink name"/><br/><br/>
                <input type={"text"} id="strDrinkThumb" value={drink.strDrinkThumb} placeholder="Image url"/><br/><br/>
                <label htmlFor="strInstructions">Instruction:</label> <br/>
                <textarea rows="4" cols="50" id="strInstructions" value={drink.strInstructions}/><br/>
                <button type={"submit"}>Create</button>
            </form>
        </>
    );
};

export default CreateDrink;

