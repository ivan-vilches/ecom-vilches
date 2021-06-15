import React from 'react';
// get our fontawesome imports
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CartWidget(){
    return (
      
        <FontAwesomeIcon icon={faShoppingBag} color="white"  />
    
    )

}


export default CartWidget;

