import React from 'react'
import Leon from '../assets/imgs/logo_pleca.svg'
import { useParams, useNavigate} from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios'
function ContactC({whaText}) {
    const history = useNavigate();
    const { lan } = useParams();
    const mail = async (data) => {
        try {
          const response = await axios.post(`http://localhost:1337/api/mail/send`, data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
        } catch (error) {
          console.log('Error sending email:', error);
        }
        history(`/${lan}/mail`)
      };
      const [formData, setFormData] = useState();
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        mail(formData);
      };
    
  return (
    
    <section className="contacto">
        <div className="topContact">
            <hr />
            <img src={Leon} alt="Logo inmobilux" />
            <hr />
        </div>
        {lan == "es"? <div className="contactBody">
             <div className="textsContact">
                <h2 className='contacTitle'>Contacto</h2>
                <p>El listado de bienes raíces no es exhaustivo. Por favor contacte con nosotros para recibir más información sobre el tipo de propiedades que puedan interesarle y le ayudaremos a encontrar los bienes raíces adecuados para usted dependiendo de sus requerimientos y necesidades:</p>
                <h3>LLAME AHORA</h3>
                <a className='CALL' href='tel:+524425950798'>Telefono: +52.442.595.0798</a>
                <br />
                <a className='WHA' href={`https://wa.me/524425950798?text=${whaText}`}>Contacto x WhatsApp</a>
                <p>O PROPORCIONE SUS DATOS PARA CONCERTAR UNA CITA</p>
            </div> 
            <form action="POST" className="contactForm" onSubmit={handleSubmit}>
                  <label htmlFor="name">Nombre:</label>
                  <input type="text" name="name" id="name" onChange={handleChange} />
                  <label htmlFor="number">Celular: </label>
                  <input type="text" name="number" id="number" onChange={handleChange} />
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" onChange={handleChange}/>
                  <label htmlFor="mensaje">Mensaje:</label>
                  <textarea name="mensaje" id="mensaje" cols="30" rows="10" onChange={handleChange}></textarea>
                  <p>* Campos obligatorios.</p>
                  <p>NOTA: Una vez recibida su información, enviaremos un Email con los datos del Profesional que se encargará de atenderlo para una primer entrevista.</p>
                  <button type="submit" className='btnMain'>Send</button>
              </form>
            </div>
            : 
            <div className="contactBody">
              <div className="textsContact">
                  <h2 className='contacTitle'>Contact</h2>
                  <p>The listing of real estate is not exhaustive. Please contact us to receive more information about the type of properties that may interest you and we will help you find the right real estate for you depending on your requirements and needs:</p>
                  <h3>CALL NOW</h3>
                  <a className='CALL' href='tel:+524425950798'>Telephone: +52.442.595.0798</a>
                  <br />
                  <a className='WHA'href={`https://wa.me/524425950798?text=${whaText}`}>Contact WhatsApp</a>
                  <p>OR PROVIDE YOUR DATA FOR AN APPOINTMENT</p>
              </div>
              <form action="POST" className="contactForm" onSubmit={handleSubmit}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" id="name" onChange={handleChange} />
                  <label htmlFor="number">Celular: </label>
                  <input type="text" name="number" id="number" onChange={handleChange} />
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" onChange={handleChange}/>
                  <label htmlFor="mensaje">Message:</label>
                  <textarea name="mensaje" id="mensaje" cols="30" rows="10" onChange={handleChange}></textarea>
                  <p>* Required fields.</p>
                  <p>NOTE: NOTE: Once your information is received, we will send an email with the information of the Specialist who will be in charge of assisting you for a first interview.</p>
                  <button type="submit" className='btnMain'>Send</button>
              </form>
          </div>}
        <div className="bottomImgs">
            <img src="" alt="" />
        </div>
    </section>
  )
}

export default ContactC
