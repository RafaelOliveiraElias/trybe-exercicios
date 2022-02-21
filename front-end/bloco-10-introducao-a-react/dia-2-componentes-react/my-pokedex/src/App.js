import './App.css';
import data from './Components/data'
import Pokedex from './Pokedex';

console.log(data);
function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;
