import React, { useState } from 'react';
import './RSVPForm.css';

const RSVP = () => {
    const [attendees, setAttendees] = useState(1);
    const [names, setNames] = useState(['']);
    const [confirmation, setConfirmation] = useState('yes'); // Estado para la confirmación de asistencia
    const whatsappNumber = '+524491852287'; // Número de WhatsApp en formato internacional

    // Manejar cambio en el número de asistentes
    const handleAttendeesChange = (e) => {
        const count = parseInt(e.target.value);
        setAttendees(count);

        // Ajustar la longitud del arreglo de nombres
        const updatedNames = [...names];
        while (updatedNames.length < count) {
            updatedNames.push('');
        }
        while (updatedNames.length > count) {
            updatedNames.pop();
        }
        setNames(updatedNames);
    };

    // Manejar cambio de nombre de un asistente específico
    const handleNameChange = (index, value) => {
        const updatedNames = [...names];
        updatedNames[index] = value;
        setNames(updatedNames);
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        let message;
        if (confirmation === 'yes') {
            message = `RSVP: \nAsistencia confirmada: Sí\n Numero asistentes: ${attendees}\n` +
                names.map((name, index) => `Nombre del asistente ${index + 1}: ${name}`).join('\n');
        } else {
            message = `RSVP: \nAsistencia confirmada: No\nNombre: ${names[0]}`;
        }

        // Codificar el mensaje y crear la URL de WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Redirigir a WhatsApp
        window.open(whatsappURL, '_blank');
    };

    // Manejar cambio de confirmación (Sí o No)
    const handleConfirmationChange = (e) => {
        const value = e.target.value;
        setConfirmation(value);
        if (value === 'no') {
            setAttendees(1); // Fijar a 1 asistente cuando la respuesta es "No"
            setNames(['']); // Limpiar y dejar solo un nombre
        } else {
            setAttendees(1); // Restablecer a 1 asistente como predeterminado
            setNames(['']);
        }
    };

    return (
        <div className="rsvp-container-1">
            <div className="rsvp-container">
                <p className='font-edu-1'><strong>Confirmación de Asistencia</strong></p>

                <form className="form-style" onSubmit={handleSubmit}>
                    <label htmlFor="confirmation">¿Asistirá?</label>
                    <div className="confirmation-options" style={{ display: 'flex', gap: '30px', alignItems: 'left' }}>
                        <label style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="confirmation"
                                value="yes"
                                checked={confirmation === 'yes'}
                                onChange={handleConfirmationChange}
                            />
                            Sí
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center' }}>
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

                    {/* Mostrar opciones según la confirmación */}
                    {confirmation === 'yes' && (
                        <>
                            <label htmlFor="attendees">Número de asistentes:</label>
                            <select id="attendees" value={attendees} onChange={handleAttendeesChange}>
                                {[...Array(10).keys()].map((i) => (
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
        </div>
    );
};

export default RSVP;
