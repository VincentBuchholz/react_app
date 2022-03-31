import React, {useEffect, useState} from 'react';
import DisplayDrink from "./DisplayDrink";

const ListUserDrinks = ({userDrinks}) => {
    return (
        <div className="card-list">
            {userDrinks.map((drink) =>{
                return <DisplayDrink drink={drink.strDrink} imgUrl={drink.strDrinkThumb} instr={drink.strInstructions} />
            })}
        </div>
    );
};

export default ListUserDrinks;
