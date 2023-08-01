import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
function MailConfirmation() {
  const {lan } = useParams();
  console.log(lan);
  return (
    <>
        <Header/>
        <div className="confirmationMail">
          <div className="confirmationMailContainer">
            <p>{lan == "es" ? "Tu información se ha enviado con éxito." : "Lo sentimos, hubo un problema al mandar el correo"}</p>

            <p>{lan == "es" ? "En breve nos pondremos en contacto para una primer entrevista." : "Intenta mas tarde"}</p>
              
          </div>
        </div>
    </>
  )
}

export default MailConfirmation
