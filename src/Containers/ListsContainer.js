import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from "react-router-dom";
import TabRouter from '../components/TabRouter';
import './../styles/Container.css';

const lists = ["Lista1", "Lista2", "Lista3", "Lista4", "Lista5",];

class ListsContainer extends Component {
    render() {
        const { match, user } = this.props;
        return (
            <div className="Container">
                <h1>Listas de Compras</h1>
                <ul>
                    {
                        lists.map((n, index) => {
                            return <li key={n} style={{listStyleType:"none"}}>
                                <Link to={`${match.url}/${user}/${index + 1}`}>
                                    Lista {index + 1}
                                </Link>
                            </li>;
                        })
                    }
                </ul>
                <TabRouter path={this.props.match.path} />
                <Route path={`${match.url}/:user/:id`} component={List} />
            </div>
        );
    }
}

const List = ({ match }) => { return (<div>Lista Nro:{match.params.id} de {match.params.user}</div>); }

const mapStateToProps = state => {
    return {
        user: state.login.user
    };
}

export default connect(mapStateToProps)(ListsContainer);

/*render={(props) => <div>Lista Nro: {props.match.params.id}</div>}*/