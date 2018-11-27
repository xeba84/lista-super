import React, { Component } from 'react';
import TabRouter from './../components/TabRouter';
import './../styles/Container.css';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <h1>Bienvenido a la Lista de Mandados</h1>
                <TabRouter path={this.props.match.path} />
            </div>
        );
    }
}

export default HomeContainer;