import React from 'react';
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'


const DisplayDrink = ({id,drink,imgUrl,instr,onDelete}) => {
    return (
        <div className="card-container">
            <p style={{margin:0,textAlign:"right"}} ><FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(id)}/></p>
            <h3>{drink}</h3>
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