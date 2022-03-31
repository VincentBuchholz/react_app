import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';


const Editor = ({editDrink , drink,updatedDrink, setUpdatedDrink, setShowEdit}) => {
    const initialState = {id:"",strDrink: "", strInstructions: "", strDrinkThumb: ""};

    const handleInput = (event) => {
        const target = event.target
        const id = target.id
        const value = target.value
        setUpdatedDrink({...drink, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editDrink(updatedDrink);
        setUpdatedDrink(initialState);
        setShowEdit(false);
    }

    return (
        <>
            <form onChange={handleInput} onSubmit={handleSubmit}>
                <h3>Edit drink</h3>
                <input type={"text"} id="strDrink" value={updatedDrink.strDrink} placeholder="Drink name"/><br/><br/>
                <input type={"text"} id="strDrinkThumb" value={updatedDrink.strDrinkThumb} placeholder="Image url"/><br/><br/>
                <label htmlFor="strInstructions">Instruction:</label> <br/>
                <textarea rows="4" cols="50" id="strInstructions" value={updatedDrink.strInstructions}/><br/>
                <button type={"submit"}>Save changes</button>
            </form>
        </>
    );
};




Editor.propTypes = {

};

export default Editor;