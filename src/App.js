// import logo from './logo.svg'; 
import Navi from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

import './App.css';

function App() {
  return (
    <div className="App">
     <Navi/>
     <ItemListContainer grettings="Saludos con un props greetings" />
     <ItemCount initial={1} stock={5} onAdd={() => console.log('agregado')}/>
   
    </div>
  );
}

export default App;


// 