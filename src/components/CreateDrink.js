import React, {useEffect, useState} from 'react';

const CreateDrink = ({setUserDrinks, userDrinks}) => {
    const [drinkName, setDrinkName] = useState();
    const [imgUrl, setImgUrl] = useState();
    const [instr, setInstr] = useState();

    const initialState = {strDrink: "", strInstructions: "", strDrinkThumb: ""};
    const [drink, setDrink] = useState(initialState);
    //setDrink(initialState)


    const persistDrink = async (d) => {
        setUserDrinks([...userDrinks, drink]);
        const res = await fetch('http://localhost:5001/drinks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(d)
        })
        const data = await res.json()
    }

    const handleInput = (event) => {
        const target = event.target
        const id = target.id
        const value = target.value
        setDrink({...drink, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        persistDrink(drink);
        setDrink(initialState);
    }

    return (
        <>
            <form onChange={handleInput} onSubmit={handleSubmit}>
                <h3>Create drink:</h3>
                <label>Drink name:</label>
                <input type={"text"} id="strDrink" value={drink.strDrink}/><br/><br/>
                <label>Image url:</label>
                <input type={"text"} id="strDrinkThumb" value={drink.strDrinkThumb}/><br/><br/>
                <label>Instruction:</label> <br/>
                <textarea rows="4" cols="50" id="strInstructions" value={drink.strInstructions}/><br/>
                <button type={"submit"}>Create</button>
            </form>
        </>
    );
};

export default CreateDrink;

