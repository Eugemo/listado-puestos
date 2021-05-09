import React from 'react';
import { Form, Button, Container } from 'reactstrap'

export class AddPaises extends React.Component {
    
  constructor(){
    super()
    this.state = {
      paises: [],
      newPais: '', 
    };
  }

   addPais = () => {
      let pais = this.state.newPais;
      this.setState({
          paises: [...this.state.paises, pais]
      });
  } 

  handleNewPais = (e) => {
    this.setState({
        newPais: e.target.value
    })
  }

  submitForm = (e) =>{
    e.preventDefault();
    const newPais = {
      name: this.state.name,
    }
    this.props.addPais(newPais)
  };

  saveData = () =>{
    window.localStorage.setItem("paises", JSON.stringify(this.state.paises))
  }

  render() {
    return (
        <Container className="body-paises">
        <div>
            <h3>Insertar Paises</h3>
        </div>
          <Form>
            <label>Pais: </label>{" "}
            <input type="text" name="pais" value={this.state.newPais} onChange={(e) => this.handleNewPais(e)}/> 
            {"  "}
            <Button color="primary" onClick={this.addPais}>
              Insertar
            </Button>{" "}
            <Button color="danger" onClick={this.saveData}>
					  Guardar
				    </Button>              
          </Form>
        <ul>
          {this.state.paises.map((elem, idx) => {return <li key={idx}>{elem}</li>})}
        </ul>
        
        </Container>
        
    )
  }

}
