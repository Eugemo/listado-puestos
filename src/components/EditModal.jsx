import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup } from 'reactstrap';

export class EditModal extends React.Component {
  constructor(props){
      super(props)
      this.props = props
      this.state={
          id: this.props.data.id,
          puesto: this.props.data.puesto,
          empresa: this.props.data.empresa,
          ciudad: this.props.data.ciudad,
          pais: this.props.data.pais, 
      }

      this.handleChange = this.handleChange.bind(this);
      this.editar = this.editar.bind(this);
  };


  handleChange (e){
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    })
  }

  editar(){
    this.props.actualizar(this.state)
  }
  

  render(){
    return(
        <>
        <Modal isOpen="true">
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
              <input className="form-control" readOnly type="text" value={this.props.data.id}/>
            </FormGroup>
            <FormGroup>
              <label>
                Puesto: 
              </label>
              <input className="form-control" name="puesto" type="text" onChange={this.handleChange} value={this.state.puesto} />
            </FormGroup>
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <input className="form-control" name="empresa" type="text" onChange={this.handleChange} value={this.state.empresa} />
            </FormGroup>
            <FormGroup>
              <label>
                Pais: 
              </label>
              <input className="form-control" name="pais" type="text" onChange={this.handleChange} value={this.state.pais} />
            </FormGroup>
            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <input className="form-control" name="ciudad" type="text" onChange={this.handleChange} value={this.state.ciudad} />
            </FormGroup>            
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar()}>
                Editar
            </Button>
            <Button
              color="danger"
              onClick={this.props.cerrarModal}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}  

