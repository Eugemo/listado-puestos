import React from 'react';
import { Form, Button, Container, FormGroup } from 'reactstrap'
import { getCiudadPais, postCiudad, getPais, getCiudad } from '../jobs/puestosJobs'

export class AddCiudades extends React.Component {
  constructor(){      
    super();
   // this.loadData();
    this.state = {
      data: [],
      countries:[],
      newCiudad: '',
      idPais:'',
    };
  }

  componentDidMount(){
    getCiudad().then(res => this.setState({
      data: res
    }))

    getPais().then(res => this.setState({
      countries: res
    }))
    
  }
  
  /* loadData = () =>{    
    const paisesAlmacenados = JSON.parse(window.localStorage.getItem("paises"));
    const ciudadesAlmacenadas = JSON.parse(window.localStorage.getItem("ciudades"));
    this.setState = {
      paises: paisesAlmacenados || [],
      ciudades: ciudadesAlmacenadas || [],
      newCiudad: '' 
    };
  } */


  addCiudad = () => {
     let data = {name: this.state.newCiudad, countrieId:this.state.idPais}
    postCiudad(data).then(res => this.setState({
      data: [...this.state.data, res]
  }))
  
  }

  handleNewPCiudad = (e) => {
    this.setState({
        newCiudad: e.target.value
    })
  }

  handleNewPais = (e) => {
    this.setState({
        idPais: e.target.value
    })
  }

  /* saveData = () =>{
    window.localStorage.setItem("ciudades", JSON.stringify(this.state.ciudades))
  } */

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
                <select className="custom-select" name="pais" onChange={(e) => this.handleNewPais(e)}>
                  <option value=''>Elija Pais</option>
                  { 
                    this.state.countries.map((countrie, index) => (
                      <option key={index+1} value={countrie.id}>{countrie.name}</option>
                    ))
                  }
                </select>
              </FormGroup>        
              <Button color="primary" onClick={this.addCiudad}>Insertar</Button>
            </Form>
        <ul>
        
           {
            this.state.data.map((dato,index) => (
              
                 <li key={index}>                 
                  {"ID: "} {dato.id}                
                  {" Ciudad: "} {dato.name}
                  {" - ID Pais: "} {dato.countrieId}
                 
                 </li>
            ))
          } 
        </ul>
        </Container>
    )
  }
}
