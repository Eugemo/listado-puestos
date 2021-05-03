import React from 'react';
import { Table, Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Container } from 'reactstrap';


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
        }
      
  };


  handleChange (e){
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    })
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
              <input className="form-control" name="pais" type="text" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <input className="form-control" name="ciudad" type="text" onChange={this.handleChange} />
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
