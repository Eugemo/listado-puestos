import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup} from 'reactstrap';
import { postData } from '../jobs/puestosJobs'

export class AddModal extends React.Component {
  constructor(props){
      
      super(props)
      this.props = props
      this.handleChange = this.handleChange.bind(this);
      this.insertarPuesto = this.insertarPuesto.bind(this);
      this.state={
          id:Date.now(),
          puesto: "",
          empresa: "",
          ciudad: "",
          pais: "", 
        paises: [],
        ciudades: []
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
    postData().then(res => this.setState({
      data: res
    }))
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
			ciudad: JSON.parse(e.target.value),
      
		});  
  }

  insertarPuesto(){
   this.props.insertarPuesto(this.state);
   
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
                Puesto: 
              </label>
              <input
                className="form-control" name="puesto" type="text" onChange={this.handleChange}/>
            </FormGroup>            
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <input className="form-control" name="empresa" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>
                Pais: 
              </label>
              <select class="custom-select" id="inputGroupSelect01" name="pais"
						onChange={(e) => this.handleSelectCountry(e)}
						value={JSON.stringify(this.state.pais)}
					>
						<option value={JSON.stringify({})}>Elija Pais</option>
                        { this.state.paises.map((pais, index) => (
                            <option key={index+1} value={JSON.stringify(pais)}>{pais}</option>
                        ))}
					</select>
            </FormGroup>
            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <select class="custom-select" id="inputGroupSelect01" name="ciudad"
						  onChange={(e) => this.handleSelectCity(e)}
						  value={JSON.stringify(this.state.place)} >
					    	<option value={JSON.stringify({})}>Elija Ciudad</option>
                  { this.state.places.map((place, index) => (
                  <option key={index+1} value={JSON.stringify(place)}>{place}</option>
                        ))}
					</select>
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
