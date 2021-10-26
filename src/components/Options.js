import React from 'react';
import ReactDOM from 'react-dom';

const Options = ({ open, onClose, units, setUnits, setNumber, number }) => {
    if (!open) return null
    
    return (
        ReactDOM.createPortal(
            <div className='options-overlay'>
                <div className='options'>
                    <button className='options-button' onClick={() => onClose(false)}><i className="fas fa-times"></i></button>
                    <p className='options-title'>Options</p>
                    
                    <p className='options-option-title'>Units:</p>
                    <div className='options-row'>
                        <label className='units-label'>Metric: 
                            <input 
                                type='radio'
                                name='units'
                                value='metric'
                                onChange={(e) => setUnits(e.target.value)}
                                checked={units === 'metric'}
                            />
                        </label>
                        <label className='units-label'>Imperial:
                            <input 
                                type='radio'
                                name='units'
                                value='imperial'
                                onChange={(e) => setUnits(e.target.value)}
                                checked={units === 'imperial'}
                            />
                        </label>
                    </div>

                    <p className='options-option-title'>Number of forecasts:</p>
                    <input type='range' min='0' max='18' step='6' defaultValue={number} onChange={e => setNumber(e.target.value)}/>
                    <p className='range-number'>{number}</p>

                    <ul className='social-ul'>
                        <li className='social-li'>
                            <a href='https://github.com/JakubChoszcz' rel="noreferrer" target='_blank' className='social-a'>
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className='social-li'>
                            <a href='https://www.linkedin.com/in/jakub-choszcz-0b0323213/' rel="noreferrer" target='_blank' className='social-a'>
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className='social-li'>
                            <a href='https://www.facebook.com/kuba.choszcz.5/' rel="noreferrer" target='_blank' className='social-a'>
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className='social-li'>
                            <a href='https://www.instagram.com/j_kuboszczyk/' rel="noreferrer" target='_blank' className='social-a'>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>,
            document.getElementById('portal')
        )
    )
}

export default Options