import React from 'react';
import { Form, Button, Container, FormGroup } from 'reactstrap'
import { getCiudad, deleteEmpresa, getData, getEmpresa, postEmpresa } from '../jobs/puestosJobs'

export class AddEmpresas extends React.Component {
  constructor(){      
    super();
   // this.loadData();
    this.state = {
      data: [],
      organizations:[],
      places: [],     
      newEmpresa: '',
      newplaceId:'',
      newCiudad: '',
    };
  }

  componentDidMount(){
    getEmpresa().then(res => this.setState({
        data: res
    }))
    
    getCiudad().then(res => this.setState({
        places: res
    }))

     
  }
  
  addEmpresa = () => {
     let data = {name: this.state.newEmpresa, placeId:this.state.newplaceId}
    postEmpresa(data).then(res => this.setState({
      data: [...this.state.data, res]
  }))
  
  }

  //funcion para BORRAR registro
  eliminar = (id) => {    
    var opcion = window.confirm("Estás Seguro que deseas eliminar  ❓❓");
    if (opcion === true) {      
      deleteEmpresa(id).then(res =>{
        getEmpresa().then(res => this.setState({
          data: res
        }))
      })      
     
    };
  }

  handleNewEmpresa = (e) => {
    this.setState({
        newEmpresa: e.target.value
    })
  }

  handleNewCiudad = (e) => {
    this.setState({
        newplaceId: e.target.value
    })
  }

  
  render() {
    return (
        <Container className="body-empresas">
                <h3>Insertar Empresa</h3>
            <Form>
              <FormGroup>
                <label>Empresa: </label>{" "}
                <input type="text" value={this.state.newEmpresa} onChange={(e) => this.handleNewEmpresa(e)}/>
              </FormGroup>
             <FormGroup>
                <label>Ciudad:</label>
                <select className="custom-select" name="pais" onChange={(e) => this.handleNewCiudad(e)}>
                  <option value=''>Elija Ciudad</option>
                   { 
                    this.state.places.map((dato, index) => (
                      <option key={index+1} value={dato.id}>{dato.name}</option>
                    ))
                   } 
                </select>
              </FormGroup>        
              <Button color="primary" onClick={this.addEmpresa}>Insertar</Button>
            </Form>
        <ul>
        
           {
            this.state.data.map((dato,index) => (              
                 <li key={index}>                 
                  {"ID: "} {dato.id}                
                  {" Empresa: "} {dato.name}
                  {" - ID Ciudad: "} {dato.placeId}
                  <Button color="danger" onClick={()=> this.eliminar(dato.id)}>Eliminar</Button>
                 </li>
            ))
           }  
        </ul>
        </Container>
    )
  }
}
