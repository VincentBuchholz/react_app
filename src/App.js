import RandomDrink from "./components/RandomDrink";
import SearchDrink from "./components/SearchDrink";
import {useEffect, useState} from "react";
import DisplayDrink from "./components/DisplayDrink";
import CreateDrink from "./components/CreateDrink";
import ListUserDrinks from "./components/ListUserDrinks";
import './styles/drink.css'
import './styles/App.css'
import './styles/drink-list.css'
import './styles/form.css'
import Editor from "./components/Editor";



export default function App() {
    const [drink, setDrink] = useState();
    const [imgUrl, setImgUrl] = useState();
    const [instr, setInstr] = useState();
    const [searchInput, setSearchInput] = useState();
    const [userDrinks, setUserDrinks] = useState([{id: "", strDrink: "", strInstructions: "", strDrinkThumb: ""}]);
    const [showEdit,setShowEdit] =useState(false);
    const[drinkToUpdate,setDrinkToUpdate] =useState({id: "", strDrink: "", strInstructions: "", strDrinkThumb: ""})

    const initialState = {id:"",strDrink: "", strInstructions: "", strDrinkThumb: ""};
    const[updatedDrink, setUpdatedDrink] = useState(initialState);

    useEffect(() => {
        const getUserDrinks = () => {
            fetch("http://localhost:5001/drinks")
                .then(res => res.json())
                .then(data => {
                    setUserDrinks(data)
                })
                .catch(err => console.log(err))
        }

        getUserDrinks();

    }, [setUserDrinks])

    // Fetch task
    const fetchDrink = async (id) => {
        const res = await fetch(`http://localhost:5001/drinks/${id}`)
        const data = await res.json()

        return data
    }

    //Delete Drink
    const deleteDrink = async (id) => {
        await fetch(`http://localhost:5001/drinks/${id}`, {method: 'DELETE',})
        setUserDrinks(userDrinks.filter((drink) => drink.id !== id))
        console.log(id)
    }
    //edit drink
    const editDrink = async (drink) => {
        const res = await fetch(`http://localhost:5001/drinks/${drink.id}`, {
        method: 'PUT',
            headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(drink)
    })
    const data = await res.json();
        setUserDrinks(userDrinks.map((element) => element.id === drink.id ? {...drink} : element))
}


    console.log(JSON.stringify(userDrinks))

    return <div className="App">
        <RandomDrink drink={drink}
                     setDrink={setDrink}
                     imgUrl={imgUrl}
                     setImgUrl={setImgUrl}
                     instr={instr}
                     setInstr={setInstr}

        />
        <SearchDrink searchInput={searchInput}
                     setSearchInput={setSearchInput}
                     setDrink={setDrink}
                     setImgUrl={setImgUrl}
                     instr={instr}
                     setInstr={setInstr}/>

        <DisplayDrink drink={drink}
                      imgUrl={imgUrl}
                      instr={instr}/>
        <CreateDrink setUserDrinks={setUserDrinks} userDrinks={userDrinks}/>
        <ListUserDrinks userDrinks={userDrinks} setUserDrinks={setUserDrinks} onDelete={deleteDrink} setDrinkToUpdate={setDrinkToUpdate} setUpdatedDrink={setUpdatedDrink}/>
        <Editor editDrink={editDrink} drink={drinkToUpdate} setUpdatedDrink={setUpdatedDrink} updatedDrink={updatedDrink}/>
    </div>
}
