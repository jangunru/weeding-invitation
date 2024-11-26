// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import './RSVPForm.css';

// const RSVP = () => {
//     const [attendees, setAttendees] = useState(1);
//     const [names, setNames] = useState(['']);
//     const [confirmation, setConfirmation] = useState('yes');

//     const handleAttendeesChange = (e) => {
//         const count = parseInt(e.target.value);
//         setAttendees(count);
//         const updatedNames = [...names];
//         while (updatedNames.length < count) updatedNames.push('');
//         while (updatedNames.length > count) updatedNames.pop();
//         setNames(updatedNames);
//     };

//     const handleNameChange = (index, value) => {
//         const updatedNames = [...names];
//         updatedNames[index] = value;
//         setNames(updatedNames);
//     };

//     const handleConfirmationChange = (e) => {
//         const value = e.target.value;
//         setConfirmation(value);
//         setAttendees(1);
//         setNames(['']);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const templateParams = {
//             confirmation: confirmation === 'yes' ? 'Sí' : 'No',
//             attendees: confirmation === 'yes' ? attendees : 'No aplica',
//             names: names.join(', '),
//         };

//         emailjs
//             .send(
//                 'service_ez7g8m8', // Replace with your EmailJS service ID
//                 'template_vdwgwe7', // Replace with your EmailJS template ID
//                 templateParams,
//                 'RcWeayLzulsRtpQAn' // Replace with your EmailJS public key
//             )
//             .then(
//                 (response) => {
//                     console.log('Email sent successfully!', response.status, response.text);
//                     alert('Confirmación enviada con éxito.');
//                 },
//                 (error) => {
//                     console.error('Failed to send email:', error);
//                     alert('Hubo un problema al enviar la confirmación.');
//                 }
//             );
//     };

//     return (
//         <div className="rsvp-container-1">
//             <div className="rsvp-container">
//                 <p className="font-edu-1"><strong>Confirmación de Asistencia</strong></p>
//                 <form className="form-style" onSubmit={handleSubmit}>
//                     <label htmlFor="confirmation">¿Asistirá?</label>
//                     <div className="confirmation-options">
//                         <label>
//                             <input
//                                 type="radio"
//                                 name="confirmation"
//                                 value="yes"
//                                 checked={confirmation === 'yes'}
//                                 onChange={handleConfirmationChange}
//                             />
//                             Sí
//                         </label>
//                         <label>
//                             <input
//                                 type="radio"
//                                 name="confirmation"
//                                 value="no"
//                                 checked={confirmation === 'no'}
//                                 onChange={handleConfirmationChange}
//                             />
//                             No
//                         </label>
//                     </div>
//                     {confirmation === 'yes' && (
//                         <>
//                             <label htmlFor="attendees">Número de asistentes:</label>
//                             <select id="attendees" value={attendees} onChange={handleAttendeesChange}>
//                                 {[...Array(10).keys()].map((i) => (
//                                     <option key={i + 1} value={i + 1}>
//                                         {i + 1}
//                                     </option>
//                                 ))}
//                             </select>
//                             {names.map((name, index) => (
//                                 <div key={index} className="attendee-name">
//                                     <label htmlFor={`name-${index}`}>Nombre del asistente {index + 1}:</label>
//                                     <input
//                                         type="text"
//                                         id={`name-${index}`}
//                                         value={name}
//                                         onChange={(e) => handleNameChange(index, e.target.value)}
//                                         required
//                                     />
//                                 </div>
//                             ))}
//                         </>
//                     )}
//                     {confirmation === 'no' && (
//                         <div className="attendee-name">
//                             <label htmlFor="name-0">Nombre:</label>
//                             <input
//                                 type="text"
//                                 id="name-0"
//                                 value={names[0]}
//                                 onChange={(e) => handleNameChange(0, e.target.value)}
//                                 required
//                             />
//                         </div>
//                     )}
//                     <button type="submit">Enviar Confirmación</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default RSVP;


import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './RSVPForm.css';

const RSVP = () => {
    const [attendees, setAttendees] = useState(1);
    const [names, setNames] = useState(['']);
    const [confirmation, setConfirmation] = useState('yes');
    const [showPopup, setShowPopup] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        let message;
        if (confirmation === 'yes') {
            message = `RSVP: \nAsistencia confirmada: Sí\nNúmero asistentes: ${attendees}\n` +
                names.map((name, index) => `Nombre del asistente ${index + 1}: ${name}`).join('\n');
        } else {
            message = `RSVP: \nAsistencia confirmada: No\nNombre: ${names[0]}`;
        }

        // Generate PDF
        const doc = new jsPDF();
        doc.text(message, 10, 10);
        doc.save('RSVP_Confirmation.pdf');

        // Show popup
        setShowPopup(true);
    };

    const handleConfirmationChange = (e) => {
        const value = e.target.value;
        setConfirmation(value);
        if (value === 'no') {
            setAttendees(1);
            setNames(['']);
        } else {
            setAttendees(1);
            setNames(['']);
        }
    };

    return (
        <div className="rsvp-container-1">
            <div className="rsvp-container">
                <p className="font-edu-1"><strong>Confirmación de Asistencia</strong></p>

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

                {showPopup && (
                    <div className="popup">
                        <p>¡RSVP enviado exitosamente! Tu confirmación se ha descargado como PDF.</p>
                        <button onClick={() => setShowPopup(false)}>Cerrar</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RSVP;
