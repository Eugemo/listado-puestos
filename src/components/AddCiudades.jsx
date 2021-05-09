import React from 'react';
import { Form, Button, Container, FormGroup } from 'reactstrap'

export class AddCiudades extends React.Component {
  constructor(){      
    super();
    this.loadData();
  }

  loadData = () =>{    
    const paisesAlmacenados = JSON.parse(window.localStorage.getItem("paises"));
    const ciudadesAlmacenadas = JSON.parse(window.localStorage.getItem("ciudades"));
    this.state = {
      paises: paisesAlmacenados || [],
      ciudades: ciudadesAlmacenadas || [],
      newCiudad: '' 
    };
  }

  addCiudad = () => {
    let ciudad = this.state.newCiudad;
    this.setState(
      {ciudades: [...this.state.ciudades, ciudad]},
      this.saveData
    );
  }

  handleNewPCiudad = (e) => {
    this.setState({
        newCiudad: e.target.value
    })
  }

  saveData = () =>{
    window.localStorage.setItem("ciudades", JSON.stringify(this.state.ciudades))
  }

  render() {
    return (
        <Container className="body-ciudades">
                <h3>Insertar Ciudades</h3>
            <Form>
              <FormGroup>
                <label>Ciudad: </label>{" "}
                <input type="text" value={this.state.newCiudad} onChange={(e) => this.handleNewPCiudad(e)}/>
              </FormGroup>
              <FormGroup>
                <label>Pais:</label>
                <select class="custom-select" name="pais">
                  <option value={JSON.stringify({})}>Elija Pais</option>
                  { 
                    this.state.paises.map((pais, index) => (
                      <option key={index+1} value={pais}>{pais}</option>
                    ))
                  }
                </select>
              </FormGroup>            
              <Button color="primary" onClick={this.addCiudad}>Insertar</Button>
            </Form>
        <ul>
                {this.state.ciudades.map((elem, idx) => {return <li key={idx}>{elem}</li>})}
        </ul>
        </Container>
    )
  };
}
