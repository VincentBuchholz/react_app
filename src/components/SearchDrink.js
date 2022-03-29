import React, {useState} from 'react';

const SearchDrink = ({searchInput,setSearchInput, setDrink, setImgUrl,setInstr}) => {
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

    const updateSearchInput = (e) =>{
        setSearchInput(e.target.value)
    }

    const search = async (e) =>{
    e.preventDefault()
        await fetch(URL+searchInput)
            .then(res => res.json())
            .then(data => {
                    setDrink(data.drinks[0].strDrink)
                    setImgUrl(data.drinks[0].strDrinkThumb)
                    setInstr(data.drinks[0].strInstructions)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form>
            <input type={"text"} onChange={updateSearchInput}/>
                <button type={"submit"} onClick={search} >Search</button>
            </form>
        </div>
    );
};

export default SearchDrink;