import React from 'react';

export default  (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        
  
    )
}