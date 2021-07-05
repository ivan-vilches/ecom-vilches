import React from 'react';
import Greeting from './Greeting.js';
import ItemList from './ItemList.js';
import ItemDetailContainer from './ItemDetailContainer.js';

const Home = function () {
	const greeting = "Ecom Vilches Tienda Holística";
	return(
		<>
		<Greeting greeting={greeting} />
		<ItemList />
		<ItemDetailContainer />
		</>)
}

export default Home;