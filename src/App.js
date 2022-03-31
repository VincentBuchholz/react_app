import RandomDrink from "./components/RandomDrink";
import SearchDrink from "./components/SearchDrink";
import {useEffect, useState} from "react";
import DisplayDrink from "./components/DisplayDrink";
import CreateDrink from "./components/CreateDrink";
import ListUserDrinks from "./components/ListUserDrinks";
import './styles/drink.css'
import './styles/App.css'
import './styles/drink-list.css'


export default function App() {
  const[drink,setDrink] = useState();
  const[imgUrl,setImgUrl] = useState();
  const [instr,setInstr] = useState();
  const [searchInput, setSearchInput] = useState();
  const [userDrinks, setUserDrinks] = useState();

  useEffect(()=>{
const getUserDrinks = () => {
  fetch("http://localhost:5001/drinks")
      .then(res => res.json())
      .then(data => {
        setUserDrinks(data)
      })
      .catch(err => console.log(err))
}

getUserDrinks();

  },[setUserDrinks])


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
    <ListUserDrinks  userDrinks={userDrinks} setUserDrinks={setUserDrinks} />
  </div>
}
