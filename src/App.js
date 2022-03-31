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
    const[drinkToUpdate,setDrinkToUpdate] =useState({id: "", strDrink: "", strInstructions: "", strDrinkThumb: ""})
    const initialState = {id:"",strDrink: "", strInstructions: "", strDrinkThumb: ""};
    const[updatedDrink, setUpdatedDrink] = useState(initialState);

    const [showEdit,setShowEdit] =useState(false);
    const [showAddDrink, setShowAddDrink] = useState(false)
    const [showDrink, setShowDrink] = useState(false)

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
    const createDrink = async (drink) => {
        const res = await fetch('http://localhost:5001/drinks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(drink)
        })
        const data = await res.json()
        setUserDrinks([...userDrinks, data])
    }


    console.log(JSON.stringify(userDrinks))

    return <div className="App">
        <RandomDrink drink={drink}
                     setDrink={setDrink}
                     imgUrl={imgUrl}
                     setImgUrl={setImgUrl}
                     instr={instr}
                     setInstr={setInstr}
                     setShowDrink={setShowDrink}

        />
        <SearchDrink searchInput={searchInput}
                     setSearchInput={setSearchInput}
                     setDrink={setDrink}
                     setImgUrl={setImgUrl}
                     instr={instr}
                     setInstr={setInstr}
                     setShowDrink={setShowDrink}/>

        {showDrink &&<DisplayDrink strDrink={drink}
                      imgUrl={imgUrl}
                      instr={instr}/>}

        <button className={"btn"} onClick={() => {
                    setShowAddDrink(!showAddDrink)
                    setShowEdit(false)
                }}
                style={{backgroundColor:showAddDrink ? 'red':'#4CAF50'}}>{showAddDrink ? 'Close':'Create new drink'}</button>
        {showAddDrink && <CreateDrink setUserDrinks={setUserDrinks} userDrinks={userDrinks} createDrink={createDrink}/>}

        {showEdit && <Editor editDrink={editDrink} drink={drinkToUpdate} setUpdatedDrink={setUpdatedDrink} updatedDrink={updatedDrink} setShowEdit={setShowEdit}/>}

        <ListUserDrinks userDrinks={userDrinks} setUserDrinks={setUserDrinks} onDelete={deleteDrink} setDrinkToUpdate={setDrinkToUpdate} setUpdatedDrink={setUpdatedDrink} setShowEdit={setShowEdit} setShowAddDrink={setShowAddDrink}/>
    </div>
}
