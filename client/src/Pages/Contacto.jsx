import React from 'react'
import Leon from '../assets/imgs/logo_pleca.svg'
import { Helmet } from 'react-helmet';
function Contacto() {
    <Helmet>
            <title>Contacto</title>
    </Helmet>
  return (
    <section className="contacto">
        <div className="topContact">
            <hr />
            <img src={Leon} alt="Logo inmobilux" />
            <hr />
        </div>
        <div className="contactBody">
            <h2 className='contacTitle'>Contacto</h2>
            <p>El listado de bienes raíces no es exhaustivo. Por favor contacte con nosotros para recibir más información sobre el tipo de propiedades que puedan interesarle y le ayudaremos a encontrar los bienes raíces adecuados para usted dependiendo de sus requerimientos y necesidades:</p>
            <h3>LLAME AHORA</h3>
            <p>Télefono: +52.4425960798</p>
            <p>Contacto x WhatsApp</p>
            <p>O PROPORCIONE SUS DATOS PARA CONCERTAR UNA CITA</p>
            <form action="POST" className="contactForm">
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="number">Celular: </label>
                <input type="text" name="number" id="number" />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                <p>* Campos obligatorios.</p>
                <p>NOTA: Una vez recibida su información, enviaremos un Email con los datos del Profesional que se encargará de atenderlo para una primer entrevista.</p>
                <button className='btnMain'>Enviar</button>
            </form>
        </div>
        <div className="bottomImgs">
            <img src="" alt="" />
        </div>
    </section>
  )
}

export default Contacto
