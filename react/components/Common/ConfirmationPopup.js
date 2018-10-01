import React, { Component } from 'react';

class ConfirmationPopup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button >close me</button>
                </div>
            </div>
        );
    }
}
export default ConfirmationPopup;