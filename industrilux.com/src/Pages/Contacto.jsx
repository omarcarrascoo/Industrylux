import React from 'react'
import Leon from '../assets/imgs/logo_pleca.svg'
function Contacto() {
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
                <input type="text" name="name" id="name" />
                <input type="text" name="number" id="number" />
                <input type="email" name="email" id="email" />
                <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </form>
        </div>
        <div className="bottomImgs">
            <img src="" alt="" />
        </div>
    </section>
  )
}

export default Contacto
