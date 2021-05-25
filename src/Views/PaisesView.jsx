import React from 'react';
import { AddPaises } from '../components/AddPaises';

export class PaisesView extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            paises: [],
            newPais: '',
        };
    }

    
    addPais = () => {
      let pais = this.state.newPais;
      this.setState({
          paises: [...this.state.paises, pais]
      });
    }

    render(){
        return(
            <div>
                <AddPaises addPais={this.state.addPais}/>
            </div>
        )
    }
}
