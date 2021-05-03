import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'


export class NotFoundView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isRediret : false
        }
    }

    redirectToHome = () => {
        this.setState({
            isRediret: true
        })
    }

    render(){
        return(
            <>
            <Container className="body-404">
                <Button onClick={this.redirectToHome}>
                    Volver al Inicio    
                </Button>
                { this.state.isRediret ? <Redirect to="/" /> : null }
            </Container>    
            </>
        )
    }
}
