import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

class Root extends Component {
    render() {
        const store = this.props.store;
        return (
            <Provider store={store}>
                <Router basename={process.env.REACT_APP_HOME_PAGE}>
                    <Route path="/" component={App} />
                </Router>
            </Provider>
        );
    }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;