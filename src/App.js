import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from 'reactstrap';
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
    data: [],
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
  insertar= (puesto)=>{
    var lista= this.state.data;
    this.setState({
      data:[...lista,puesto]
    })
    this.setState({ modalInsertar: false});
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
        { 
          this.state.modalInsertar 
          ? <AddModal 
                cerrarModal={this.cerrarModalInsertar} 
                insertarPuesto = {this.insertar}
                data={this.state.data}
            /> 
          : null }
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
            {this.state.data.map((dato,index)=>(
              <tr key={index}>
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
          { 
          this.state.modalActualizar 
          ? <EditModal 
                cerrarModal={this.cerrarModalActualizar} 
                actualizar = {this.editar}
                data={this.state.form}
            /> 
          : null }
        </Table>
      </Container>  
      </>
    );
  }
}
export default App;
