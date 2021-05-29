import React from 'react';
import { Container, Form, Button } from 'reactstrap';
import { getPais, postPais, deletePais } from '../jobs/puestosJobs'

export class AddPaises extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      newPais: "",
    };
  }

  componentDidMount() {
    getPais().then((res) =>
      this.setState({
        data: res,
      })
    );
  }

  addPais = () => {
    postPais(this.state.newPais).then((res) =>
      this.setState({
        data: [...this.state.data, res],
      })
    );
  };

  //funcion para BORRAR registro
  eliminar = (id) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar  ❓❓");
    if (opcion === true) {
      deletePais(id).then((res) => {
        getPais().then((res) =>
          this.setState({
            data: res,
          })
        );
      });
    }
  };

  handleNewPais = (e) => {
    this.setState({
      newPais: e.target.value,
    });
  };

  render() {
    return (
      <Container className="body-paises">
        <div>
          <h3>Insertar Paises</h3>
        </div>
        <Form>
          <label>Pais: </label>{" "}
          <input
            type="text"
            name="pais"
            value={this.state.newPais}
            onChange={(e) => this.handleNewPais(e)}
          />
          {"  "}
          <Button color="primary" onClick={this.addPais}>
            Insertar
          </Button>{" "}
        </Form>
        <ul>
          {this.state.data.map((dato, index) => (
            <li key={index}>
              {"ID: "} {dato.id}
              {" - "} {dato.name}
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
