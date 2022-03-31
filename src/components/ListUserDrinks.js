import React, {useEffect, useState} from 'react';
import DisplayDrink from "./DisplayDrink";

const ListUserDrinks = ({userDrinks,onDelete}) => {
    return (
        <div className="card-list">
            {userDrinks.map((drink) =>{
                return <DisplayDrink id={drink.id} drink={drink.strDrink} imgUrl={drink.strDrinkThumb} instr={drink.strInstructions} onDelete={onDelete} />
            })}
        </div>
    );
};

export default ListUserDrinks;
