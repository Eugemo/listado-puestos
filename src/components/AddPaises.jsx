import React from 'react';
import { Form, Button, Container } from 'reactstrap'

export class AddPaises extends React.Component {
    constructor(){
      
        super()
        //this.props = props
        //this.handleChange = this.handleChange.bind(this);
       // this.insertarPuesto = this.insertarPuesto.bind(this);
        this.state = {
            paises: [],
            newPais: '', 
          };
  }

  AddPais = () => {
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

  render() {
    return (
        <Container className="body-paises">
                <h3>Insertar Paises</h3>
            <Form>
                <label>Pais: </label>{" "}
                <input type="text" value={this.state.newPais} onChange={(e) => this.handleNewPais(e)}/> 
                {"  "}
            
                <Button color="primary" onClick={this.AddPais}>
                Insertar
                </Button>
            </Form>
        <ul>
                {this.state.paises.map((elem, idx) => {return <li key={idx}>{elem}</li>})}
        </ul>
        </Container>
    )
  }
 
}
