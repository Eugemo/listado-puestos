import React from 'react';
import { AddEmpresas } from '../components/AddEmpresas';

export class EmpresasView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            empresas: [],
            //newCiudad: '', 
          };
    }

         
    addEmpresa = () => {
        let empresa = this.state.newEmpresa;
        this.setState({
            organizations: [...this.state.organizations, empresa]
        });
    }

    render(){
        return(
            <div>
                <AddEmpresas addEmpresa={this.state.addEmpresa} />
            </div>
        )
    }
}
