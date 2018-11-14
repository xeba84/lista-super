import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import InfoIcon from '@material-ui/icons/Info';

class InfoMessage extends Component {    

    render() {
        const { onInfoMessageClose, message } = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    autoHideDuration={ 3000 }
                    open={ message !== "" }
                    onClose={ onInfoMessageClose }
                >
                    <SnackbarContent
                        style={{ backgroundColor: "#3700B3" }}
                        aria-describedby="message-id"
                        message={
                            <span id="message-id" style={{ display: 'flex', alignItems: 'center', }}>
                                <InfoIcon style={{ fontSize: 20, opacity: 0.9, marginRight: 10 }} />
                                { message }
                            </span>}
                    />
                </Snackbar>
            </div>
        );
    };
}

InfoMessage.propTypes = {
    onInfoMessageClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};

export default InfoMessage;