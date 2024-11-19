import React from 'react';
import './DressCode.css';

const DressCode = () => {
    return (
        <div className="dress-code-container">


            <div className="dress-code-sections">
                {/* First Section */}
                <div className="dress-code-section">
                    <p className='font-edu-1'><strong>Código de vestimenta</strong></p>
                    <img src="/images/vestimenta.png" alt="Dress Code Icon" className="vestimenta-icon" />
                    <p><strong>Formal</strong></p>
                    <p>Te recomendamos llevar calzado cómodo para que le saques brillo a la pista!</p>
                </div>
                <br></br>
                {/* Second Section */}
                <div className="dress-code-section">
                    <p className='font-edu-1'><strong>Solo adultos</strong></p>
                    <p>
                        Queremos que este momento tan especial lo disfrutes tanto como nosotros, por eso hemos decidido
                        que el evento sea sólo para adultos. No niños por favor.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default DressCode;
