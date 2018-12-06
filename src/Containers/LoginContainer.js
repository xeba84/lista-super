import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import WarnMessage from './../components/Message/WarnMessage';
import Login from './../components/Login';
import Spinner from './../components/Spinner';
import { showWarnMessage } from '../actions/index';
import { apiLoginUser as login } from '../actions/index';
import { OK } from './../constants/answerTypes';

class LoginContainer extends Component {
    render() {
        const { isRequesting, loginUserData, user, pass, currentPath, warnMessage, onWarnMessageClose } = this.props;
        const from = currentPath ? currentPath : "/";
        return (
            (!isRequesting) ?
                (loginUserData.status !== OK) ?
                    <div>
                        <WarnMessage onWarnMessageClose={onWarnMessageClose} message={warnMessage} />
                        <Login onLoginClick={this.handleLogin} user={user} pass={pass} />
                    </div>
                    :
                    <div>
                        <Redirect to={from} />
                    </div>
                :
                <Spinner isLoading={isRequesting} size={30} message="Validando..."/>
        );
    }

    handleLogin = (user, pass) => {
        const { showWarnMessage } = this.props;
        if (!user) {
            showWarnMessage("Por favor ingrese un Usuario");
        } else if (!pass) {
            showWarnMessage("Por favor ingrese una Contraseña");
        } else {
            const { login } = this.props;
            login(user, pass);
        }
    }

    componentWillUnmount() {
        const { onWarnMessageClose } = this.props;
        onWarnMessageClose();
    }
}

const mapStateToProps = state => {
    return {
        loginUserData: state.login.loginUserData,
        currentPath: state.changingRoute.currentPath,
        warnMessage: state.popUpMessages.warnMessage,
        isRequesting: state.login.isRequesting,
        user: state.login.user,
        pass: state.login.pass,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user, pass) => { dispatch(login(user, pass)) },
        showWarnMessage: message => { dispatch(showWarnMessage(message)) },
        onWarnMessageClose: () => { dispatch(showWarnMessage("")) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
