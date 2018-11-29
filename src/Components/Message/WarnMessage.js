import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

class WarnMessage extends Component {    

    render() {
        const { onWarnMessageClose, message } = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    autoHideDuration={ 3000 }
                    open={ message !== "" }
                    onClose={ onWarnMessageClose }
                >
                    <SnackbarContent
                        style={{ backgroundColor: "#FFBF00" }}
                        aria-describedby="message-id"
                        message={
                            <span id="message-id" style={{ display: 'flex', alignItems: 'center', }}>
                                <WarningIcon style={{ fontSize: 20, opacity: 0.9, marginRight: 10 }} />
                                { message }
                            </span>}
                    />
                </Snackbar>
            </div>
        );
    };
}

WarnMessage.propTypes = {
    onWarnMessageClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};

export default WarnMessage;