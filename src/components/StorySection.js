import React from "react";
import './StorySection.css';

const StorySection = () => {


    return (
        <div className="story-section">
            <p className="font-edu-1"><strong>¡¡Nos casamos!!</strong></p>
            <img src="/images/cups.png" alt="Rings Icon" className="rings-icon" />
            <p className="font-edu">Diez años de amor, risas y aventuras nos han traído hasta aquí. Nos encantaría que nos acompañes a celebrar el comienzo de esta nueva etapa en nuestro viaje juntos.</p>
            <div className="venue-info">
                <p> <strong>1 de Marzo de 2025</strong> </p>
                <div className="icon-columns">
                    <div className="icon-column">
                        <img src="/images/iglesia.png" alt="Ceremony Icon" className="icon" />
                        <p>Ceremonia</p>
                        <p>5:00 pm</p>
                    </div>
                    <div className="icon-column">
                        <img src="/images/recepcion2.png" alt="Reception Icon" className="icon" />
                        <p>Recepción</p>
                        <p>6:00 pm</p>
                    </div>
                </div>
                <br></br>
                <div>
                    <div>
                        <p> Ex hacienda la Trinidad</p>
                        <p> San Francisco de los Romo, Ags.</p>
                    </div>
                </div>

                <br></br>

                <div>
                    <a
                        href="https://maps.app.goo.gl/rMGketzGjySn27Sm9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-button"
                    >
                        Ubicación
                    </a>
                </div>
            </div>
        </div >
    );
};

export default StorySection;
