import React from 'react';
import { AddCiudades } from '../components/AddCiudades';

export class CiudadesView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            places: [],
            //newCiudad: '', 
          };
    }

         
    addCiudad = () => {
        let ciudad = this.state.newCiudad;
        this.setState({
            places: [...this.state.places, ciudad]
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
