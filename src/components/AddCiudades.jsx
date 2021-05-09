import React from 'react';
import { Form, Button, Container } from 'reactstrap'

export class AddCiudades extends React.Component {
    constructor(){      
        super()
            this.state = {
            ciudades: [],
            newCiudad: '', 
            };
    }

    addCiudad = () => {
      let ciudad = this.state.newCiudad;
      this.setState({
          ciudades: [...this.state.ciudades, ciudad]
      });
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
                <label>Ciudad: </label>{" "}
                <input type="text" value={this.state.newCiudad} onChange={(e) => this.handleNewPCiudad(e)}/> 
                {"  "}
            
                <Button color="primary" onClick={this.addCiudad}>
                Insertar
                </Button>{" "}
                <Button color="danger" onClick={this.saveData}>
				Guardar
				</Button>   
            </Form>
        <ul>
                {this.state.ciudades.map((elem, idx) => {return <li key={idx}>{elem}</li>})}
        </ul>
        </Container>
    )
  }

  
}
