import React, { Component } from 'react';
import './Component.css';
import { connect } from 'react-redux';
import { GridLoader } from 'react-spinners';

class Spinner extends Component {
    render() {
        const { isLoadingData } = this.props;
        return (
            isLoadingData &&
            <div className="center">
                <GridLoader
                    size={40}
                    color={'#123abc'}
                    loading={true}
                />
                <h2>Cargando...</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoadingData: state.loadingMessages.isLoadingData,
    }
}

export default connect(mapStateToProps)(Spinner);
