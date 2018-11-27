import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRoute } from '../actions/index';

class TabRouter extends Component {
    componentDidMount() {
        const { changeRoute, currentPath } = this.props;
        if (currentPath !== this.props.path)
            changeRoute(this.props.path);
    }

    componentDidUpdate() {
        const { changeRoute, currentPath } = this.props;
        if (currentPath !== this.props.path)
            changeRoute(this.props.path);
    }

    render() { return (<div></div>);}
}

const mapStateToProps = state => {
    return {
        currentPath: state.changingRoute.currentPath,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeRoute: path => { dispatch(changeRoute(path)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabRouter);