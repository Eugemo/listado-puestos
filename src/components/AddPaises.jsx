import React from 'react';
import { Form, Button, Container } from 'reactstrap';
import { getPais } from '../jobs/puestosJobs'

export class AddPaises extends React.Component {
    
  constructor(){
    super()
    //this.loadData();
    this.state = {
      data: [],
    
    };
  }

  componentDidMount(){
    getPais().then(res => this.setState({
      data: res
    }))
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
        data: this.state.paises.filter((pais, idx) => idx !== id)
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

  /* loadData = () =>{
    const paisesAlmacenados = JSON.parse(window.localStorage.getItem("paises"));
    this.setState = {
      paises: paisesAlmacenados || [],
      newPais: '', 
    };
  } */

  render() {
    return (
        <Container className="body-paises">
        <div>
            <h3>Insertar Paises</h3>
        </div>
          {/* <Form>
            <label>Pais: </label>{" "}
            <input type="text" name="pais" value={this.state.newPais} onChange={(e) => this.handleNewPais(e)}/> 
            {"  "}
            <Button color="primary" onClick={this.addPais}>
              Insertar
            </Button>{" "}            
          </Form> */}
        <ul>
        {
            this.state.data.map((dato,index) => (
                 <li key={index}>                 
                  {dato.id}                
                  {dato.name}
                  
                 </li>
            ))
          } 
        </ul>        
        </Container>
    )
  }
}
