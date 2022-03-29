import React, {useEffect, useState} from 'react';

const SelectUserDrinks = ({userDrinks, setUserDrinks}) => {
    const[userDrinkOptions,setUserDrinkOptions] = useState();
    

    async function getUserDrinks () {
        // e.preventDefault()
        await fetch("http://localhost:5001/drinks")
            .then(res => res.json())
            .then(data => {
                setUserDrinks(data)
                console.log(userDrinks)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {

    }, []);

    return (
        <>
            <select></select>
        </>
    );
};

export default SelectUserDrinks;
