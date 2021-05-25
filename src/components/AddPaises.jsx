import React from 'react';
import { Form, Button, Container } from 'reactstrap'

export class AddPaises extends React.Component {
    
  constructor(){
    super()
    this.loadData();
  }

  addPais = () => {
      let pais = this.state.newPais;
      this.setState(
        {paises: [...this.state.paises, pais]}, 
        () => {this.saveData();}
      );
  } 

  deletePais = (id) =>{
    this.setState({
        paises: this.state.paises.filter((pais, idx) => idx !== id)
    });
}

  handleNewPais = (e) => {
    this.setState({
        newPais: e.target.value
    })
  }

  saveData = () => {
    console.log(this.state.paises);
    window.localStorage.setItem("paises", JSON.stringify(this.state.paises))
  }

  loadData = () =>{
    const paisesAlmacenados = JSON.parse(window.localStorage.getItem("paises"));
    this.setState = {
      paises: paisesAlmacenados || [],
      newPais: '', 
    };
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
          </Form>
        <ul>
          {
           this.state.paises?.map((elem, idx) => {return <li key={idx}>{elem}</li>})
          }
        </ul>        
        </Container>
    )
  }
}
