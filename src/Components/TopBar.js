import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { logoutUser } from '../actions/index';
import { OK } from './../constants/answerTypes';

class TopBar extends Component {
    render() {
        return (
            <AppBar position="static">
                <div style={{ width: "100%", overflow: "hidden", backgroundColor: "rgb(118, 116, 243)" }}>
                    <div style={{ width: "120px", float: "left" }}>
                        <h3>Mandados</h3>
                    </div>
                    {this.getLoginControls()}
                </div>
            </AppBar>
        );
    }

    getLoginControls = () => {
        const { loginUserData, logout } = this.props;
        return (
            (loginUserData.status === OK) ?
            <div>
                <div style={{ textAlign: "center", float: "left" }}>
                    <h5>"{loginUserData.userName.substring(0,22)}"</h5>
                </div>
                <div style={{textAlign: "right", float: "right", marginTop:"12px" }}>
                    <Button 
                        color="secondary" variant="contained" 
                        size="small" onClick={() => logout()}
                    >
                        Logout
                    </Button> 
                    &nbsp;
                </div>                
            </div>
            :
            <div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginUserData: state.login.loginUserData,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => { dispatch(logoutUser()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
