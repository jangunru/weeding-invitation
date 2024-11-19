import React from 'react';
import './OptionsSection.css';

const OptionsSection = () => {
    return (
        <div className="options-section">
            <p className='font-edu-1'><strong>Sugerencia de hospedaje</strong></p>
            <br></br>
            <div className="options-buttons">

                {/* Additional buttons for hotels */}
                <a href="https://maps.app.goo.gl/SYwD44BdT3setJjN9" target="_blank" rel="noopener noreferrer" className="option-button">Marriot</a>
                <a href="https://maps.app.goo.gl/RRJ5FP1i8NHo75xx7" target=" _blank" rel="noopener noreferrer" className="option-button">Wyndham Garden</a>
                <a href="https://maps.app.goo.gl/bMjCQCb4Aa1uucPV9" target="_blank" rel="noopener noreferrer" className="option-button">Hotel Las Trojes</a>
                <a href="https://maps.app.goo.gl/veU2MJR19AH47B7h6" target="_blank" rel="noopener noreferrer" className="option-button">Ibis</a>
            </div>
        </div >
    );
};

export default OptionsSection;
