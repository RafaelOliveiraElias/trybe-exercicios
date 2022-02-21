import React from "react";
import data from './Components/data'
import Pkmninfos from './Pkmninfos'

class Pokedex extends React.Component{
    render () {
        return (
            <><h1>Pokedex</h1>
                {data.map((each) => <Pkmninfos key={each.id} pokemon={each}/>)}
            </>
            )
    }
}

export default Pokedex