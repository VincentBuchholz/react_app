import React from 'react';
import PropTypes from 'prop-types'

const DisplayDrink = ({drink,imgUrl,instr,}) => {
    return (
        <div className="card-container">
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