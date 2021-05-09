import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Table, Button, Container } from 'reactstrap';
import { AddModal } from '../components/AddModal';
import { EditModal } from '../components/EditModal';

export class MainView extends React.Component{
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
 
  //cambio el estado del modal EDITAR para mostrarlo
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: !this.state.modalActualizar,
    });
  };
 
  //cambio el estado del modal CREAR para mostrarlo
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: !this.state.modalInsertar,
    });
  };
 
  // cierro los modales
  cerrarModal = () => {
    this.setState({ 
        modalActualizar: false,
        modalInsertar: false,
    });
  };

  //funcion para EDITAR registro
  editar = (dato) => {
    var arreglo = this.state.data;
    let registro = arreglo.find(reg => reg.id === dato.id)
    let pos = arreglo.indexOf(registro)
    arreglo[pos] = dato
    this.setState({ data: arreglo, modalActualizar: false });
  };
  //funcion para BORRAR registro
  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar "+dato.puesto+" ❓❓");
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.forEach((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
      var lista2=this.state.data;
      var contador2=1;
      lista2.forEach((registro) => {
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
      <Container className="body-puestos">
        <h1>Listado Puestos</h1> 
        <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear Puesto</Button>
        <br/><br/>
        { 
          this.state.modalInsertar 
          ? <AddModal 
                cerrarModal={this.cerrarModal} 
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
                cerrarModal={this.cerrarModal} 
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

