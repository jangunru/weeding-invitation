import React, { useState } from 'react';
import './Registry.css'; // Asegúrate de que Registry.css tenga los estilos necesarios

const Registry = () => {
    const [showBankDetails, setShowBankDetails] = useState(false);

    // Detalles bancarios
    const bankDetails = {
        accountHolder: 'Jorge Angel Ruiz Basurto',
        bankName: 'CLABE Banamex:',
        clabe: '002180701869928391'
    };

    // Manejar visibilidad de los detalles bancarios
    const toggleBankDetails = () => {
        setShowBankDetails(!showBankDetails);
    };

    return (
        <div className="post-it-registry">
            <p className='font-edu-1'><strong>Regalos</strong></p>

            <p>¡TU ASISTENCIA Y ALEGRIA SERA NUESTRO MEJOR REGALO! </p>
            <p> Aunque si quieres tener un detalle para nosotros, que mejor que colaborar en nuestra luna de miel.

            </p>

            {/* Botón para mostrar u ocultar detalles bancarios */}
            <button onClick={toggleBankDetails} className="toggle-button">
                Luna de Miel 🌙🍯
            </button>

            {/* Información bancaria colapsable */}
            {showBankDetails && (
                <div className="bank-details">
                    <img src="/images/africa.png" alt="Gift Icon" className="gift-icon" />
                    <div className="bank-info">
                        <p>{bankDetails.accountHolder}</p>
                        <p>{bankDetails.bankName}</p>
                        <p>{bankDetails.clabe}</p>
                    </div>
                    <div className="sobres">
                        <p className='mensaje_sobre'>Puedes hacerlo en el  número de cuenta o en los sobres que estarán en la recepción.</p>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Registry;
