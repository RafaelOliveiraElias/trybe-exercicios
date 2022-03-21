import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pkmnIndex: 0,
      pkmnType: 'All',
    }
    this.handleClick = this.handleClick.bind(this);
    this.size = this.size.bind(this);
  }
  size = () => {
    if (this.state.pkmnType === 'All') {
      return pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />).length
    } else {
      return pokemons.filter(each => each.type === this.state.pkmnType)
      .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />).length
    }
  }
  handleClick = () => {
    const tamanho = this.size();
    console.log(this.size())
    if (this.state.pkmnIndex < tamanho -1) {
      this.setState((estadoAnterior, _props) => ({
        pkmnIndex: estadoAnterior.pkmnIndex + 1
      }))  
    } else {
      this.setState((_estadoAnterior, _props) => ({
        pkmnIndex: 0
      }))
    }
  }
  handleClickFire = () => {
    this.setState((estadoAnterior, _props) => ({
      pkmnType: 'Fire',
      pkmnIndex: 0
    }))  
  }
  handleClickPsychic = () => {
    this.setState((estadoAnterior, _props) => ({
      pkmnType: 'Psychic',
      pkmnIndex: 0
    }))  
  }
  handleClickElectric = () => {
    this.setState((estadoAnterior, _props) => ({
      pkmnType: 'Electric',
      pkmnIndex: 0
    }))  
  }
  handleClickPoison = () => {
    this.setState((estadoAnterior, _props) => ({
      pkmnType: 'Poison',
      pkmnIndex: 0
    }))  
  }
  handleClickNormal = () => {
    this.setState((estadoAnterior, _props) => ({
      pkmnType: 'Normal',
      pkmnIndex: 0
    }))  
  }
  handleClickDragon = () => {
    this.setState((estadoAnterior, _props) => ({
      pkmnType: 'Dragon',
      pkmnIndex: 0
    }))  
  }
  handleClickBug = () => {
    this.setState((estadoAnterior, _props) => ({
      pkmnType: 'Bug',
      pkmnIndex: 0
    }))  
  }
  handleClickAll = () => {
    this.setState((estadoAnterior, _props) => ({
      pkmnType: 'All',
      pkmnIndex: 0
    }))  
  }
  render() { 
    return (
      <div className="App">
          <h1> Pokedex </h1>
          { this.state.pkmnType !== 'All' ?
          pokemons
          .filter(each => each.type.includes(this.state.pkmnType))
          .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)[this.state.pkmnIndex] : 
          pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)[this.state.pkmnIndex] }
          {this.size() > 1 ? <button onClick={this.handleClick}>Próximo Pokemon</button> : <button onClick={this.handleClick} disabled>Próximo Pokemon</button>}
          <div>
            <button onClick={this.handleClickAll}>All</button>
            <button onClick={this.handleClickElectric}>Electric</button>
            <button onClick={this.handleClickFire}>Fire</button>
            <button onClick={this.handleClickPsychic}>Psychic</button>
            <button onClick={this.handleClickBug}>Bug</button>
            <button onClick={this.handleClickPoison}>Poison</button>
            <button onClick={this.handleClickNormal}>Normal</button>
            <button onClick={this.handleClickDragon}>Dragon</button>
          </div>
      </div>
    );
  }
}

export default App;
