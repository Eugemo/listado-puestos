import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup} from 'reactstrap';
import { postData, getCiudad, getPais } from '../jobs/puestosJobs'

export class AddModal extends React.Component {
  constructor(props){
      
      super(props)
      this.props = props
      this.handleChange = this.handleChange.bind(this);
      this.insertarPuesto = this.insertarPuesto.bind(this);
      this.state={
          id:Date.now(),
          position: "",
          description: "",
          organization: "",          
        data: [],
        jobs: "",
      }
      
      
  };

  componentDidMount() {
	/* 	if(localStorage.getItem("paises") != null){
			this.setState({
				paises: JSON.parse(localStorage.getItem("paises"))
	
      })
		}
    if(localStorage.getItem("ciudades") != null){
			this.setState({
				ciudades: JSON.parse(localStorage.getItem("ciudades"))
			})
		} */
   
    
	}
  

  handleChange (e){
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    })
  }

  handleSelectCountry = (e) => {
		e.preventDefault();
		this.setState({
			pais: JSON.parse(e.target.value),
      
		});  
  }

  handleSelectCity = (e) => {
		e.preventDefault();
		this.setState({
			place: JSON.parse(e.target.value),
      
		});  
  }

  insertarPuesto(){
   //this.props.insertarPuesto(this.state);
   let jobs = {position: this.state.newCiudad,
               description: this.state.newDescription,
               organization: this.state.newOrganization}                              
   postData(jobs).then(res => this.setState({
    data: [...this.state.data, jobs]
  }))
   
  }
  
  render(){
    return(
        <>
        <Modal isOpen="true">
          <ModalHeader>
           <div><h3>Insertar Puesto</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>
                Posicion: 
              </label>
              <input
                className="form-control" name="position" type="text" onChange={this.handleChange}/>
            </FormGroup>            
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <input className="form-control" name="organization" type="text" onChange={this.handleChange} />
            </FormGroup>
            {/* <FormGroup>
              <label>
                Pais: 
              </label>
              <select class="custom-select" id="inputGroupSelect01" name="pais"
						onChange={(e) => this.handleSelectCountry(e)}>
						<option value='' >Elija Pais</option>
                  { 
                    this.state.countries.map((countrie, index) => (
                      <option key={index+1} value={countrie.id}>{countrie.name}</option>
                    ))
                  }
					</select>
            </FormGroup>
            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <select class="custom-select" id="inputGroupSelect01" name="ciudad"
						  onChange={(e) => this.handleSelectCity(e)}>
					    	<option value=''>Elija Ciudad</option>
                { 
                    this.state.places.map((place, index) => (
                      <option key={index+1} value={place.id}>{place.name}</option>
                    ))
                  }
					</select>
            </FormGroup> */}
            <FormGroup>
              <label>
                Descripcion: 
              </label>
              <input className="form-control" name="description" type="text" onChange={this.handleChange} />
            </FormGroup>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.insertarPuesto}>
              Insertar
            </Button>
            <Button className="btn btn-danger" onClick={this.props.cerrarModal}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        </>
    )
  }
}  
