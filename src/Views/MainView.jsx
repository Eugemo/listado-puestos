import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container } from "reactstrap";
import { AddModal } from "../components/AddModal";
import { EditModal } from "../components/EditModal";
import { deleteData, getData, postData } from "../jobs/puestosJobs";

export class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],

      withError: false,
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
    this.editar = this.editar.bind(this);
    this.insertar = this.insertar.bind(this);
  }

  ///intento de mostrar la info de la aAPI
  componentDidMount() {
    getData().then((res) =>
      this.setState({
        data: res,
      })
    );
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
    let registro = arreglo.find((reg) => reg.id === dato.id);
    let pos = arreglo.indexOf(registro);
    arreglo[pos] = dato;
    this.setState({ data: arreglo, modalActualizar: false });
  };

  //funcion para BORRAR registro
  eliminar = (id) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar  ❓❓");
    if (opcion === true) {
      deleteData(id).then((res) => {
        getData().then((res) =>
          this.setState({
            data: res,
          })
        );
      });
    }
  };

  //Funcion para CREAR nuevo registro
  insertar = (estado) => {
    const { position, description, place } = estado;
    let job = {
      position: position,
      description: description,
      organizationId: place.id,
    };

    console.log(JSON.stringify({ place }), "place");
    postData(job).then((res) =>
      this.setState({
        data: [
          ...this.state.data,
          {
            position: position,
            description: description,
            organizationId: place.organizationId,
            organization: place,
          },
        ],
      })
    );
    console.log(
      JSON.stringify({
        position: position,
        description: description,
        organizationId: place.organizationId,
        organization: place,
      }),
      "el obj agregado"
    );
    this.cerrarModal();

    getData().then((res) =>
      this.setState({
        data: res,
      })
    );
  };

  render() {
    return (
      <>
        <Container className="body-puestos">
          <h1>Listado Puestos</h1>
          {this.state.withError && <p>Error de conexion con la API Rest</p>}
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Crear Puesto
          </Button>
          <br />
          <br />
          {this.state.modalInsertar ? (
            <AddModal
              cerrarModal={this.cerrarModal}
              insertarPuesto={this.insertar}
              data={this.state.data}
            />
          ) : null}
          <Table className="table table-striped table-success aling-middle">
            <thead>
              <tr>
                <th>Puesto</th>
                <th>Empresa</th>
                <th>Descripcion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((dato, index) => (
                <tr key={index}>
                  <td>{dato.position}</td>
                  <td>{dato.organization.name}</td>
                  <td>{dato.description}</td>

                  <td>
                    {/* <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
 */}                    <Button
                      color="danger"
                      onClick={() => this.eliminar(dato.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            {this.state.modalActualizar ? (
              <EditModal
                cerrarModal={this.cerrarModal}
                actualizar={this.editar}
                data={this.state.form}
              />
            ) : null}
          </Table>
        </Container>
      </>
    );
  }
}
