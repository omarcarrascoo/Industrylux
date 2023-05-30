import { useState, useEffect } from 'react'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'

function Index() {
  const [countries, serCountries] = useState([])
  const fetchCountries =()=>{
    fetch('http://174.138.95.49/api/countries/')
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      serCountries(data)
    })
  }
  useEffect(()=>{
    fetchCountries()
  },[])
  return (
    <>
      <div className="index">
        <header className="indexHeader">
          <div className="container__indexHeader">
              <a href="#">English</a>
          </div>
      </header>
      <main className="index__main">
        <div className="index__main__logo">
          <img src="http://174.138.95.49/assets/images/logo-industrilux.jpg" alt="industrilux logo jpg" />
        </div>
        <div className="index__main__titles">
          <h1>INMOBILUX - MARKETING PARA BIENES RAÍCES ESPECIALES Y DE LUJO</h1>
          <h2>TERRENOS - CASAS - DEPARTAMENTOS - OFICINAS - LOCALES COMERCIALES - BODEGAS, NAVES Y TERRENOS INDUSTRIALES</h2>
        </div>
        <div className="index__coutry__selecetor">
          <div className="indexCountrySelectorContainer">
            {countries.map(country =>(
              <Link key={country._id} to={`es/bienes-raices-indusrieales/${country.urlCountry}`}>
                <div  className="countryCard">
              <div className="countryCardFlag">
                <img src={country.imgRoute} alt="Image Flag" />
              </div>
              <div className="countryCardTexts">
                <h3>Ver Propiedades en {country.countryName}</h3>
              </div>
            </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="index__body__texts">
          <div className="index__body__texts__container">
            <p>INMOBILUX es una agencia inmobiliaria LUXURY enfocada a bienes raíces especiales y de lujo. Promovemos los mejores terrenos, casas, departamentos, oficinas corporativas, locales comerciales, bodegas y naves industriales en los mejores desarrollos inmobiliarios del mundo, a través de un marketing muy especial dirigido al mercado objetivo, ofreciendo un servicio personalizado y ético para los clientes del más alto poder adquisitivo.</p>
            <p>
            Nuestras alianzas a nivel internacional, nos permiten tener acceso a clientes del segmento ELITE (empresarios, financieros, artistas, deportistas profesionales, etc.) y promover las mejores propiedades, para poner a su alcance posibilidades de inversión inmobiliaria en bienes raíces exclusivos y selectos de gran oportunidad y potencial de plusvalía.
            </p>
            <p>Nuestro equipo está integrado por asesores profesionales, que ofrecen herramientas de marketing únicas para la promoción de bienes raíces: inteligencia de mercados, fotografía y video profesional, descripciones adecuadas, estrategia digital, servicios jurídicos, asesoría fiscal, notarios, gestores, valuadores, brokers hipotecarios, etc. para brindarles un servicio integral en todo el proceso de la compra venta, renta u operación que se realice de los bienes raíces.</p>
            <p>Somos IMPULSORES e INTEGRADORES de proyectos inmobiliarios y operamos oficinas de corretaje en donde representamos propiedades y desarrollos con marca propia y la de los Desarrolladores, integrándonos como su brazo comercial y de marketing, con objeto de estudiar perfectamente el potencial del proyecto, llevando a cabo el benchmark y análisis de mercado para definir el target adecuado, medir la factibilidad comercial, maximizar la rentabilidad y convirtiéndonos en la ESTRUCTURA COMERCIAL del desarrollo, diseñando el modelo comercial adecuado, armando el equipo de ventas, coordinando los convenios de trabajo con otras agencias inmobiliarias a nivel mundial, implementando los tableros de control del canal de prospección, control de Información en CRM, monitoreo de los indicadores de conversión, etc. para ajustar continuamente las estrategias de marketing y lograr los objetivos de absorción, para asegurar el retorno de inversión.</p>
            <p>Trabajamos de la mano con FONDOS DE INVERSIÓN nacionales y extranjeros para conseguir el financiamiento de los proyectos y tenemos una alianza estratégica con el Arq. Ismael Leyva para diseñar proyectos urbanísticos mixtos en México. Con su despacho, Ismael Leyva Architects PC (ILA), especializado en arquitectura, diseño de interiores y urbanismo, ha desarrollado más de 70 proyectos en la ciudad de Nueva York y ha proyectado algunos de los edificios más espectaculares del mundo.</p>
          </div>
        </div>
      </main>
      <footer className="indexFooter">
        <p className="termConditions">
        Al hacer uso de esta página, acepto los <a href="#">Términos y Condiciones - Aviso Legal</a> y el <a href="#">Aviso de Privacidad</a> ©Copyright 2019 ®Marketing Staff Todos los Derechos Reservados
        </p>
      </footer>
      </div>
    </>
  )
}

export default Index
