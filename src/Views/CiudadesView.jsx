import React from 'react';
import { AddCiudades } from '../components/AddCiudades'

export class CiudadesView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ciudades: [],
            newCiudad: '', 
          };
    }

    /* componentDidMount(){
        let prevCiudades = localStorage.getItem("ciudades")
        this.setState({
            ciudades : JSON.parse()
        })
    } */

    addCiudad = () => {
        let ciudad = this.state.newCiudad;
        this.setState({
            ciudades: [...this.state.ciudades, ciudad]
        });
    }

    render(){
        return(
            <div>
                <AddCiudades addCiudad={this.state.addCiudad} />
            </div>
        )
    }
}
