import React from "react";
import { Form, Button, Container, FormGroup } from "reactstrap";
import {
  getCiudadPais,
  deleteCiudad,
  postCiudad,
  getPais,
  getCiudad,
} from "../jobs/puestosJobs";

export class AddCiudades extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      countries: [],
      newCiudad: "",
      idPais: "",
    };
  }

  componentDidMount() {
    getCiudad().then((res) =>
      this.setState({
        data: res,
      })
    );

    getPais().then((res) =>
      this.setState({
        countries: res,
      })
    );
  }

  addCiudad = () => {
    let data = { name: this.state.newCiudad, countrieId: this.state.idPais };
    postCiudad(data).then((res) =>
      this.setState({
        data: [...this.state.data, res],
      })
    );
  };

  //funcion para BORRAR registro
  eliminar = (id) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar  ❓❓");
    if (opcion === true) {
      deleteCiudad(id).then((res) => {
        getCiudad().then((res) =>
          this.setState({
            data: res,
          })
        );
      });
    }
  };

  handleNewPCiudad = (e) => {
    this.setState({
      newCiudad: e.target.value,
    });
  };

  handleNewPais = (e) => {
    this.setState({
      idPais: e.target.value,
    });
  };

  render() {
    return (
      <Container className="body-ciudades">
        <h3>Insertar Ciudades</h3>
        <Form>
          <FormGroup>
            <label>Ciudad: </label>{" "}
            <input
              type="text"
              value={this.state.newCiudad}
              onChange={(e) => this.handleNewPCiudad(e)}
            />
          </FormGroup>
          <FormGroup>
            <label>Pais:</label>
            <select
              className="custom-select"
              name="pais"
              onChange={(e) => this.handleNewPais(e)}
            >
              <option value="">Elija Pais</option>
              {this.state.countries.map((countrie, index) => (
                <option key={index + 1} value={countrie.id}>
                  {countrie.name}
                </option>
              ))}
            </select>
          </FormGroup>
          <Button color="primary" onClick={this.addCiudad}>
            Insertar
          </Button>
        </Form>
        <ul>
          {this.state.data.map((dato, index) => (
            <li key={index}>
              {"ID: "} {dato.id}
              {" Ciudad: "} {dato.name}
              {" - ID Pais: "} {dato.countrieId}
              <Button color="danger" onClick={() => this.eliminar(dato.id)}>
                Eliminar
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}
