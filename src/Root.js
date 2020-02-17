import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';

class Root extends Component {
    render() {
        const {store, persistor} = this.props;
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router basename={process.env.REACT_APP_HOME_PAGE}>
                        <Route path="/" component={App} />
                    </Router>
                </PersistGate>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;