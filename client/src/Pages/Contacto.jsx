import React from 'react'

import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import ContactC from '../components/ContactC';
function Contacto() {
    <Helmet>
            <title>Contacto</title>
    </Helmet>
  return (
    <>
    <Header/>
    <ContactC whaText = "Contact us!"/>
    </>
  )
}

export default Contacto
