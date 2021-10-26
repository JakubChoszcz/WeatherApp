import React from 'react';
import ReactDOM from 'react-dom';

const Options = ({ open, onClose }) => {
    if (!open) return null
    
    return (
        ReactDOM.createPortal(
            <div className='options-overlay' onClick={() => onClose()}>
                <div className='err'>
                    <i className="fas fa-exclamation-triangle"></i>
                    <p className='err-info'>Something went wrong.</p>
                </div>
            </div>,
            document.getElementById('portal')
        )
    )
}

export default Options