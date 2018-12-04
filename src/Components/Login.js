import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/Login.css';

class Login extends Component {
    render() {
        const { user, pass } = this.props;
        return (
            <div className="login-div">            
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
                            defaultValue={user}
                            required autoFocus />
                        <input 
                            ref={field => this.txtPass = field}
                            type="password" 
                            className="login-input" 
                            placeholder="Contraseña" 
                            defaultValue={pass}
                            required autoComplete="true" />
                        <div className="submit-container">
                            <button 
                                onClick={(e) => this.handleLoginClick(e)} 
                                className="login-button">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }

    handleLoginClick = (e) => {
        e.preventDefault();
        const user = this.txtUser.value;
        const pass = this.txtPass.value;
        if (!user){
            this.txtUser.focus();
        }else if (!pass) {
            this.txtPass.focus();
        }
        const { onLoginClick } = this.props;
        onLoginClick(user, pass);
    }
}

Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    user: PropTypes.string,
    pass: PropTypes.string,
};

export default Login;