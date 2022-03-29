import RandomDrink from "./components/RandomDrink";
import SearchDrink from "./components/SearchDrink";
import {useState} from "react";
import DisplayDrink from "./components/DisplayDrink";

export default function App() {
  const[drink,setDrink] = useState();
  const[imgUrl,setImgUrl] = useState();
  const [instr,setInstr] = useState();
  const [searchInput, setSearchInput] = useState();

  return <>
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
  </>
}
