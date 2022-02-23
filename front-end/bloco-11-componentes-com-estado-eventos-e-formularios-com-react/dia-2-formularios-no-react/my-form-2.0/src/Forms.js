import React, { Component } from 'react'
import states from './states';

class Form extends Component {
    render() {
        const { value, handleChange } = this.props
        return(
            <div>
                <form className="form">
                    <fieldset>
                        <label>
                            Nome:
                            {' '}
                            <input
                                type="text"
                                name="name"
                                value={value.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Email:
                            {' '}
                            <input
                                type="email"
                                name="email"
                                value={value.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            CPF:
                            {' '}
                            <input
                                type="text"
                                name="cpf"
                                value={value.cpf}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Endereço:
                            {' '}
                            <input
                                type="text"
                                name="adress"
                                value={value.adress}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Cidade:
                            {' '}
                            <input
                                type="text"
                                name="city"
                                value={value.city}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Estado:
                            {' '}
                            <select name='state' onChange={handleChange} value={value.state}>
                                {states.map(({value, label}) => <option value={value}>{label}</option>)}
                            </select>
                        </label>
                        <div>
                            <label>
                            <input type="radio"
                            name="living"
                            value="casa"
                            onChange={handleChange}/>
                            Casa</label>
                            <label>
                            <input type="radio"
                            name="living"
                            value="apartamento"
                            onChange={handleChange}/>
                            Apartamento</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label>
                            Resumo do currículo:
                            {' '}
                            <textarea 
                            name='resume'
                            required
                            ></textarea>
                        </label>
                        <br/>
                        <label>
                            Cargo:
                            {' '}
                            <textarea 
                            name='role'
                            required
                            ></textarea>
                        </label>
                        <br/>
                        <label>
                            Descrição do cargo:
                            {' '}
                            <textarea 
                            name='descriptionrole'
                            required
                            ></textarea>
                        </label>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Form;