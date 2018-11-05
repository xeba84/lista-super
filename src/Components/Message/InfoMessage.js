import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import InfoIcon from '@material-ui/icons/Info';

class InfoMessage extends Component {    

    constructor(props) {
        super(props);
        this.state = { showMessage: props.showMessage, message: props.message };
    };

    componentDidUpdate(prevProps, prevState) {        
        /*if (prevState.showMessage !== this.props.showMessage){
            this.setState( { showMessage: this.props.showMessage});
        }  */      
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState( { showMessage: nextProps.showMessage});
    }    

    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    autoHideDuration={ 3000 }
                    open={ this.state.showMessage }
                    onClose={ this.handleMessageClose }
                >
                    <SnackbarContent
                        style={{ backgroundColor: "#3700B3" }}
                        aria-describedby="message-id"
                        message={
                            <span id="message-id" style={{ display: 'flex', alignItems: 'center', }}>
                                <InfoIcon style={{ fontSize: 20, opacity: 0.9, marginRight: 10 }} />
                                { this.state.message }
                            </span>}
                    />
                </Snackbar>
            </div>
        );
    };    

    handleMessageClose = () => {
        //console.log("handleMessageClose");
        this.setState({ showMessage: false });
    };
}

InfoMessage.propTypes = {
    showMessage: PropTypes.bool.isRequired
};

export default InfoMessage;