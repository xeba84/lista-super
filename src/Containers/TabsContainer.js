import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './../styles/Container.css';

const tabLinks = [
    { to: "/", label: "Inicio" },
    { to: "/Products", label: "Productos" },
    { to: "/Lists", label: "Listas" }
];

class TabsContainer extends Component {
    render() {
        const { currentPath } = this.props;
        const selectedTab = currentPath ? tabLinks.findIndex((l) => l.to === currentPath) : 0;
        return (
            <div>
                <Tabs
                    value={selectedTab}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {
                        tabLinks.map((l, index) => <Tab key={index} component={Link} to={l.to} label={l.label} />)
                    }
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentPath: state.changingRoute.currentPath,
    }
}

export default connect(mapStateToProps)(TabsContainer);
