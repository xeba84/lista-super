import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TabRouter from './TabRouter';
import { OK } from '../constants/answerTypes';


class PrivateRoute extends Component {
    render() {
        const { component: Component, loginUserData, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={(props) => (
                    (loginUserData.status !== OK) ?
                        <div>
                            <TabRouter path={this.props.path} />
                            <br />
                            <label style={{ fontFamil: 'Roboto' }}>Usuario no logueado  =></label>
                            <Button color="primary" component={Link} to="/Login" from={this.props.path}>LOGIN</Button>
                        </div>
                        :
                        <Component {...props} />
                )}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginUserData: state.login.loginUserData,
    }
}
export default connect(mapStateToProps)(PrivateRoute);
