import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './RSVPForm.css';

const RSVP = () => {
    const [attendees, setAttendees] = useState(1);
    const [names, setNames] = useState(['']);
    const [confirmation, setConfirmation] = useState('yes');
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState(null);
    const [emailStatus, setEmailStatus] = useState({ show: false, success: null });
    const [isLoading, setIsLoading] = useState(false);

    const handleAttendeesChange = (e) => {
        const count = parseInt(e.target.value);
        setAttendees(count);
        const updatedNames = [...names];
        while (updatedNames.length < count) updatedNames.push('');
        while (updatedNames.length > count) updatedNames.pop();
        setNames(updatedNames);
    };

    const handleNameChange = (index, value) => {
        const updatedNames = [...names];
        updatedNames[index] = value;
        setNames(updatedNames);
    };

    const handleConfirmationChange = (e) => {
        const value = e.target.value;
        setConfirmation(value);
        setAttendees(1);
        setNames(['']);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            confirmation: confirmation === 'yes' ? 'Sí' : 'No',
            attendees: confirmation === 'yes' ? attendees : 'No aplica',
            names: names.join(', '),
        };
        setFormData(templateParams);
        setShowModal(true);
    };

    const sendEmail = async () => {
        setIsLoading(true);
        try {
            await emailjs.send(
                'service_ez7g8m8', //EmailJS service ID
                'template_vdwgwe7', //EmailJS template ID
                formData,
                'RcWeayLzulsRtpQAn' // mailJS public key
            );
            setEmailStatus({ show: true, success: true });
        } catch (error) {
            console.error('Failed to send email:', error);
            setEmailStatus({ show: true, success: false });
        }
        setShowModal(false);
        setIsLoading(false);
    };

    return (
        <div className="rsvp-container-1">
            <div className="rsvp-container">
                <p className="font-edu-1"><strong>Confirmación de Asistencia</strong></p>
                <form className="form-style" onSubmit={handleSubmit}>
                    <label htmlFor="confirmation">¿Asistirá?</label>
                    <div className="confirmation-options">
                        <label>
                            <input
                                type="radio"
                                name="confirmation"
                                value="yes"
                                checked={confirmation === 'yes'}
                                onChange={handleConfirmationChange}
                            />
                            Sí
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="confirmation"
                                value="no"
                                checked={confirmation === 'no'}
                                onChange={handleConfirmationChange}
                            />
                            No
                        </label>
                    </div>
                    {confirmation === 'yes' && (
                        <>
                            <label htmlFor="attendees">Número de asistentes:</label>
                            <select id="attendees" value={attendees} onChange={handleAttendeesChange}>
                                {[...Array(5).keys()].map((i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            {names.map((name, index) => (
                                <div key={index} className="attendee-name">
                                    <label htmlFor={`name-${index}`}>Nombre del asistente {index + 1}:</label>
                                    <input
                                        type="text"
                                        id={`name-${index}`}
                                        value={name}
                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                        required
                                    />
                                </div>
                            ))}
                        </>
                    )}
                    {confirmation === 'no' && (
                        <div className="attendee-name">
                            <label htmlFor="name-0">Nombre:</label>
                            <input
                                type="text"
                                id="name-0"
                                value={names[0]}
                                onChange={(e) => handleNameChange(0, e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <button type="submit">Enviar Confirmación</button>
                </form>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Confirmación de Asistencia</h3>
                        <p><strong>Asistencia:</strong> {formData.confirmation}</p>
                        <p><strong>Número de asistentes:</strong> {formData.attendees}</p>
                        <p><strong>Nombres:</strong></p>
                        <ul className="centered-list">
                            {names.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>
                        <div className="modal-buttons">
                            <button className="confirm-button" onClick={sendEmail} disabled={isLoading}>{isLoading ? 'Enviando...' : 'Confirmar'}</button>
                            <button className="cancel-button" onClick={() => setShowModal(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

            {emailStatus.show && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {emailStatus.success ? (
                            <p>¡Gracias! Tu confirmación ha sido enviada exitosamente.</p>
                        ) : (
                            <p>Hubo un problema al enviar tu confirmación. Intenta nuevamente.</p>
                        )}
                        <button className="confirm-button" onClick={() => setEmailStatus({ show: false, success: null })}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RSVP;
