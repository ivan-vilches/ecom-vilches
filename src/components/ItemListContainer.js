import React from 'react';
import ItemList from './ItemList';



function ItemListContainer({grettings}){
    return (
        <>
        <div>{grettings}</div>
        <ItemList />
        </>
    )

};


export default ItemListContainer;

