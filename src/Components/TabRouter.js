import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../actions/index';

class TabRouter extends Component {
    componentDidMount() {
        this.manageRouteChange();
    }

    componentDidUpdate() {
        this.manageRouteChange();
    }

    render() { return (<div></div>);}

    manageRouteChange = () => {
        const { changeRoute, currentPath } = this.props;        
        if (currentPath !== this.props.path)
            changeRoute(this.props.path);
    }
}

const mapStateToProps = state => {
    return {
        currentPath: state.changingRoute.currentPath,
        isLogged: state.login.isLogged,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeRoute: path => { dispatch(changeRoute(path)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabRouter);