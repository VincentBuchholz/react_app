import React, {useEffect, useState} from 'react';

const SelectUserDrinks = ({userDrinks, setUserDrinks}) => {
    const[userDrinkOptions,setUserDrinkOptions] = useState();

    var uDrinks = null;


    

    // async function getUserDrinks () {
    //     // e.preventDefault()
    //     await fetch("http://localhost:5001/drinks")
    //         .then(res => res.json())
    //         .then(data => {
    //           return data;
    //         })
    //         .catch(err => console.log(err))
    // }


    useEffect(() => {
            fetch("http://localhost:5001/drinks")
                .then(res => res.json())
                .then(data => {
                    setUserDrinks(data);
                })
                .catch(err => console.log(err))
    }, []);

    if(userDrinks) {
        uDrinks = userDrinks.map((drink) => {
          return `<option>${drink.strDrink}</option>`
        })

    }





    return (
        <>
            <select>{uDrinks}</select>
        </>
    );
};

export default SelectUserDrinks;
