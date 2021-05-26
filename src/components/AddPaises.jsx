import React from 'react';
import { Container, Form, Button } from 'reactstrap';
import { getPais, postPais } from '../jobs/puestosJobs'

export class AddPaises extends React.Component {
    
  constructor(){
    super()
    //this.loadData();
    this.state = {
      data: [],
      newPais:'',
    };
  }

  componentDidMount(){
    getPais().then(res => this.setState({
      data: res
    }))
        
  }

   
  addPais = () => {
     
      postPais(this.state.newPais).then(res => this.setState({
          data: [...this.state.data, res]
      }))
      
    
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

  /* saveData = () => {
    //console.log(this.state.paises);
    //window.localStorage.setItem("paises", JSON.stringify(this.state.paises))
    
  } */

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
            this.state.data.map((dato,index) => (
                 <li key={index}>                 
                  {"ID: "} {dato.id} 
                  {" - "} {dato.name}
                  
                 </li>
            ))
          } 
        </ul>        
        </Container>
    )
  }
}
