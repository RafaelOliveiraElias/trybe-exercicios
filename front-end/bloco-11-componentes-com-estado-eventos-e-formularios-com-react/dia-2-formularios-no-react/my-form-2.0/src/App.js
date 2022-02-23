import React from "react";
import Forms from "./Forms";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      living: '',
      resume: '',
      role: '',
      descriptionrole: '',
    }
  }
  handleChange = ({target}) => {
    let { name, value } = target
    if (name === 'name') value = value.toUpperCase();
    
    this.setState({
      [name]: value
    })
  }
  render() { 
    return (
    <>
      <h1>My forms 2.0</h1>
      <Forms value={this.state} handleChange={this.handleChange} />
    </>);
  }
}

export default App;