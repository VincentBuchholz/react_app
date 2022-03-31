import React, {useEffect, useState} from 'react';

const CreateDrink = ({setUserDrinks,userDrinks}) => {
    const[drinkName,setDrinkName] = useState();
    const[imgUrl,setImgUrl] = useState();
    const[instr,setInstr] = useState();



    const persistDrink = async (e) => {
        e.preventDefault()
        const drink ={
            strDrink:  drinkName,
            strInstructions: instr,
            strDrinkThumb: imgUrl
        }
        setUserDrinks([...userDrinks,drink]);
            const res = await fetch('http://localhost:5001/drinks', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(drink)
            })
            const data = await res.json()
        }

    return (
        <>
            <form>
                <h3>Create drink:</h3>
                <label>Drink name:</label>
                <input type={"text"} onChange={(e) => setDrinkName(e.target.value)}/><br/><br/>
                <label>Image url:</label>
                <input type={"text"} onChange={(e) => setImgUrl(e.target.value)}/><br/><br/>
                <label>Instruction:</label> <br/>
                <textarea rows="4" cols="50" onChange={(e) => setInstr(e.target.value)}/><br/>
                <button type={"submit"} onClick={persistDrink}>Create</button>
            </form>
        </>
    );
};

export default CreateDrink;

