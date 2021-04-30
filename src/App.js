import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Container } from 'reactstrap';
import { AddModal } from './components/AddModal';
import { EditModal } from './components/EditModal';

const data = [
  {id: 1, puesto: "Scrum Master", empresa: "tech", ciudad: "LR", pais: "ARG"},
  {id: 2, puesto: "Desarrollador java", empresa: "tech 2", ciudad: "San Pablo", pais: "BR"},
  {id: 3, puesto: "DevWeb", empresa: "tech 3", ciudad: "Munich", pais: "GER"}, 
]

class App extends React.Component{
  constructor(props){
    super(props)
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
  };
  this.editar = this.editar.bind(this)
  this.insertar = this.insertar.bind(this)
  }

  //cambio el estado del modal EDITAR para mostrarlo/ocultarlo
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  
  //cambio el estado del modal CREAR para mostrarlo/ocultarlo
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  //funcion para EDITAR registro
  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].puesto = dato.puesto;
        arreglo[contador].empresa = dato.empresa;
        arreglo[contador].ciudad = dato.ciudad;
        arreglo[contador].pais = dato.pais;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  //funcion para BORRAR registro
  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar el "+dato.id+" ❓❓");
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
      var lista2=this.state.data;
      var contador2=1;
      lista2.map((registro)=>{
        registro.id=contador2;
        contador2++;
      })
      this.setState({data: lista2});
    }
  };

  //Funcion para CREAR nuevo registro
  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render(){
    return(
      <>
      <Container>
        <h1 className="">Listado Puestos</h1> 
        <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear Puesto</Button>
        <br/><br/>
        <Table className="table table-striped table-success aling-middle">
          <thead>
            <tr>
                <th>Id</th>
                <th>Puesto</th>
                <th>Empresa</th>
                <th>Ciudad</th>
                <th>Pais</th>
                <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((dato)=>(
              <tr>
                <td>{dato.id}</td>
                <td>{dato.puesto}</td>
                <td>{dato.empresa}</td>
                <td>{dato.ciudad}</td>
                <td>{dato.pais}</td>
                <td>
                <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}>
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>  
      
      {/* modal editar
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
 */}
        {/* modal insertar 
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
        </Modal> */}
      </>
    );
  }
}
export default App;
