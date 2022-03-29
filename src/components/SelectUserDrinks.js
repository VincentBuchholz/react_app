import React, {useEffect, useState} from 'react';

const SelectUserDrinks = ({userDrinks, setUserDrinks}) => {
    const[userDrinkOptions,setUserDrinkOptions] = useState();
    

    const getUserDrinks = async (e) =>{
        e.preventDefault()
        await fetch("http://localhost:5000/drinks")
            .then(res => res.json())
            .then(data => {
                setUserDrinks(data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        return () => {
            setUserDrinkOptions (userDrinks.map((drink) =>{
                return <option>{drink.strDrink}</option>
            }))
        };
    }, []);
    console.log(userDrinkOptions)

    return (
        <>
            <select>{userDrinkOptions}</select>
        </>
    );
};

export default SelectUserDrinks;
