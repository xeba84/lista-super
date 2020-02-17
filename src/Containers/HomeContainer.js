import React, { Component } from 'react';
import TabRouter from '../components/TabRouter';
import './../styles/Container.css';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <h2 style={{color:"rgb(118, 116, 243)"}} >Lista de Mandados</h2>
                <TabRouter path={this.props.match.path} />
                <div style={{textAlign: "center", }}>
                    <h5 style={{color:"rgb(118, 116, 243)"}} >{process.env.REACT_APP_VERSION}</h5>
                </div>
            </div>
        );
    }
}

export default HomeContainer;