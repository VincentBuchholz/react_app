import React from 'react';
import PropTypes from 'prop-types'
import {FaTimes,FaMarker} from 'react-icons/fa'


const DisplayDrink = ({drink,id,strDrink,imgUrl,instr,onDelete,setDrinkToUpdate,setUpdatedDrink}) => {
    return (
        <div className="card-container">

            <div style={id ? {display:"block"} : {display:"none"}}>
            <p  style={{margin:0,textAlign:"right"}} ><FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(id)}/></p>

                <p><FaMarker style={{cursor: 'pointer'}} onClick={() => {setDrinkToUpdate(drink)
                setUpdatedDrink(drink)
                }}/></p>
            </div>
            <h3>{strDrink}</h3>
            <img alt={"No img found"} src={imgUrl} width={200} height={200}/>
            <h4>Instructions:</h4>
            <p>{instr}</p>
        </div>
    );
};




DisplayDrink.propTypes = {
    drink: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    instr: PropTypes.string.isRequired,
}

export default DisplayDrink;