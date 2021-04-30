import React from 'react';

export class EditModal extends React.Component {
  constructor(props){
      super(props)
      this.props = props
      this.state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
          id: "",
          puesto: "",
          empresa: "",
          ciudad: "",
          pais: "", 
        },
      }
  };

  render(){
    return(
        <>
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
              <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
            </FormGroup>
            <FormGroup>
              <label>
                Puesto: 
              </label>
              <input className="form-control" name="puesto" type="text" onChange={this.handleChange} value={this.state.form.puesto} />
            </FormGroup>
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <input className="form-control" name="empresa" type="text" onChange={this.handleChange} value={this.state.form.empresa} />
            </FormGroup>
            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <input className="form-control" name="ciudad" type="text" onChange={this.handleChange} value={this.state.form.ciudad} />
            </FormGroup>
            <FormGroup>
              <label>
                Pais: 
              </label>
              <input className="form-control" name="pais" type="text" onChange={this.handleChange} value={this.state.form.pais} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}>
                Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}  

