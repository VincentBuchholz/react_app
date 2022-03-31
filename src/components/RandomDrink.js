import React, {useState} from 'react';

const RandomDrink = ({drink,setDrink,imgUrl,setImgUrl,instr,setInstr,setShowDrink}) => {
    //

    const getDrink = async () =>{
        await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(data => {
                setShowDrink(true);
                setDrink(data.drinks[0].strDrink)
                setImgUrl(data.drinks[0].strDrinkThumb)
                setInstr(data.drinks[0].strInstructions)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <h2>Get a random drink</h2>
            <button type={"button"} onClick={getDrink}>Get random drink</button>
        </>
    );
};

export default RandomDrink;