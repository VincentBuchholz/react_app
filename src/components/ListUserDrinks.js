import React, {useEffect, useState} from 'react';
import DisplayDrink from "./DisplayDrink";

const ListUserDrinks = ({userDrinks,onDelete, setDrinkToUpdate,setUpdatedDrink, setShowEdit, setShowAddDrink}) => {
    return (
        <div className="card-list">
            {userDrinks.map((drink) =>{
                return <DisplayDrink key={drink.id} id={drink.id} drink={drink} strDrink={drink.strDrink} imgUrl={drink.strDrinkThumb} instr={drink.strInstructions} onDelete={onDelete} setDrinkToUpdate={setDrinkToUpdate} setUpdatedDrink={setUpdatedDrink} setShowEdit={setShowEdit} setShowAddDrink={setShowAddDrink} />
            })}
        </div>
    );
};

export default ListUserDrinks;
