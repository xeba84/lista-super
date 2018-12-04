import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GridLoader } from 'react-spinners';
import './../styles/Component.css';

class Spinner extends Component {
    render() {
        const { isLoading, size, message } = this.props;
        return (
            isLoading &&
            <div className="center">
                <GridLoader
                    size={size}
                    color={'#123abc'}
                    loading={true}
                />
                <h3>{message}</h3>
            </div>
        );
    }
}

Spinner.propTypes = {
    isLoading: PropTypes.bool,
    size: PropTypes.number,
    message: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        isLoadingData: state.loadingMessages.isLoadingData,
    }
}
export default connect(mapStateToProps)(Spinner);
