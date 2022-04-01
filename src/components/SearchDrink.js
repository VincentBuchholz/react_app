import React, {useState} from 'react';

const SearchDrink = ({searchInput,setSearchInput,searchDrink}) => {


    const updateSearchInput = (e) =>{
        setSearchInput(e.target.value)
    }

    const search = async (e) =>{
        e.preventDefault()
        searchDrink(searchInput)
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