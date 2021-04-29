import React from 'react';


export class AddModal extends React.Component {
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
          <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Puesto</h3></div>
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
                Ciudad: 
              </label>
              <input className="form-control" name="ciudad" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>
                Pais: 
              </label>
              <input className="form-control" name="pais" type="text" onChange={this.handleChange}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        </>
    )
  }
}  
