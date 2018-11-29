import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import './../styles/Login.css';
import { login } from '../actions/index';
import WarnMessage from './../components/Message/WarnMessage';
import { showWarnMessage } from '../actions/index';

class LoginContainer extends Component {
    render() {
        const { isLogged, currentPath, warnMessage, onWarnMessageClose } = this.props;
        const from = currentPath ? currentPath : "/";
        return (
            !isLogged ?
                <div className="login-div">
                    <WarnMessage onWarnMessageClose={onWarnMessageClose} message={warnMessage} />
                    <div className="login-container">
                        <div className="login" id="login">
                            <header>
                                <h4>Login</h4>
                            </header>
                            <form className="login-form">
                                <input 
                                    ref={field => this.txtUser = field}
                                    type="text" 
                                    className="login-input" 
                                    placeholder="Usuario" 
                                    required autoFocus/>
                                <input 
                                    ref={field => this.txtPass = field}
                                    type="password" 
                                    className="login-input" 
                                    placeholder="Contraseña" 
                                    required autoComplete="true" />
                                <div className="submit-container">
                                    <button 
                                        onClick={(e) => this.loginHandler(e)} 
                                        className="login-button">LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <Redirect to={from} />
                </div>
        );
    }

    loginHandler = (e) => {
        e.preventDefault();        
        const user = this.txtUser.value;
        const pass = this.txtPass.value;
        const { showWarnMessage } = this.props;
        
        if (!user){
            showWarnMessage("Por favor ingrese un Usuario")
            this.txtUser.focus();
        }else if (!pass) {
            showWarnMessage("Por favor ingrese una Contraseña")
            this.txtPass.focus();
        } else {
            const { login } = this.props;
            login(user, pass);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.login.isLogged,
        currentPath: state.changingRoute.currentPath,
        warnMessage: state.popUpMessages.warnMessage,
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
