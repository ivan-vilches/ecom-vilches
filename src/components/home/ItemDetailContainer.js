import React, { useEffect, useState } from 'react';
import Loading from '../Loading.js';
import ItemDetail from './ItemDetail.js'

const product = [{id:'1', name: 'Aceite Oliva', brand: 'Indu', price: 50, initial: 2, min: 2, max: 10, image: 'https://www.lechepuleva.es/documents/13930/203222/aceite_oliva_g.jpg/f47c7bc3-a603-4663-931f-5fe89b64bbb9?t=1422956946000'}];

const ItemDetailContainer = function(){
const [ item, setItem ] = useState([]);
const [ loading, setLoading] = useState(true);

useEffect( () => {
	const task = new Promise( ( resolve, reject ) => {
		setTimeout(() => {
				resolve(product);
			}, 3000)});

	task.then(
		res => {
			setItem(res);
			setLoading(false)
		},
		err => {console.log(err)},
		);

	}, []);

	return(<div>
		{ loading && <Loading />}
		{item.map(it => 
		<ItemDetail
		id={it.id}
		name={it.name}
		brand={it.brand}
		price={it.price}
		initial={it.initial}
		max={it.max}
		min={it.min}
		image={it.image}
		 />)}
		</div>);
}

export default ItemDetailContainer;