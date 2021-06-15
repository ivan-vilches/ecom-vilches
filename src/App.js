// import logo from './logo.svg'; 
import Navi from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import './App.css';

function App() {
  return (
    <div className="App">
     <Navi/>
     <ItemListContainer grettings="Saludos con un props greetings" />
   
    </div>
  );
}

export default App;
