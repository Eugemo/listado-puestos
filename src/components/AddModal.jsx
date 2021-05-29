import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import { postData, getEmpresa } from "../jobs/puestosJobs";

export class AddModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      position: "",
      description: "",
      data: [],
      organizations: [],

      place: "",
    };
  }

  componentDidMount() {
    getEmpresa().then((res) =>
      this.setState({
        organizations: res,
      })
    );
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleSelectCountry = (e) => {
    e.preventDefault();
    this.setState({
      pais: JSON.parse(e.target.value),
    });
  };

  handleNewEmpresa = (e) => {
    e.preventDefault();
    this.setState({
      place: JSON.parse(e.target.value),
    });
    console.log(this.state.place, "handle");
  };

  handleSelectCity = (e) => {
    e.preventDefault();
    this.setState({
      place: JSON.parse(e.target.value),
    });
  };

  render() {
    return (
      <>
        <Modal isOpen="true">
          <ModalHeader>
            <div>
              <h3>Insertar Puesto</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Posicion:</label>
              <input
                className="form-control"
                name="position"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Empresa:</label>
              <select
                className="custom-select"
                name="organization"
                onChange={(e) => this.handleNewEmpresa(e)}
              >
                <option value="">Elija Empresa</option>
                {this.state.organizations.map((organization, index) => (
                  <option
                    key={index + 1}
                    value={JSON.stringify({
                      id: organization.id,
                      name: organization.name,
                    })}
                  >
                    {organization.name}
                  </option>
                ))}
              </select>
            </FormGroup>

            <FormGroup>
              <label>Descripcion:</label>
              <input
                className="form-control"
                name="description"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.props.insertarPuesto(this.state)}
            >
              Insertar
            </Button>
            <Button className="btn btn-danger" onClick={this.props.cerrarModal}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
