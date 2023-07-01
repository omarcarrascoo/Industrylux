import { useState, useEffect } from 'react'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
function Index() {
  const [HomeInfo, setHomeInfo] = useState([])
  const { lan } = useParams();
  const optionlan = lan == "es" ? "/en" : "/es"
  const optionlanText = lan == "es" ? "English" : "Español"
  const fetchHomeInfo =()=>{
    fetch('http://localhost:1337/api/homes/')
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      
      setHomeInfo(data)
    })
  }
  const [countries, serCountries] = useState([])
  const fetchCountries =()=>{
    fetch('http://localhost:1337/api/countries/')
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      serCountries(data)
    })
  }
  useEffect(()=>{
    fetchCountries()
    fetchHomeInfo()
  },[])
  const filteredHomeInfo = HomeInfo.filter(element => element.lenguage === lan);
  const pageInfo = filteredHomeInfo[0] || 0
  return (
    <>
      <div className="index">
        <header className="indexHeader">
          <div className="container__indexHeader">
              <a href={optionlan}>{optionlanText}</a>
          </div>
      </header>
      <main className="index__main">
        <div className="index__main__logo">
          <img src="http://localhost:1337/public/images/logo-industrilux.jpg" alt="industrilux logo jpg" />
        </div>
        <div className="index__main__titles">
          <h1>{pageInfo.h1}</h1>
          <h2 className='title-page'>{pageInfo.h2}</h2>
        </div>
        <div className="index__coutry__selecetor">
          <div className="indexCountrySelectorContainer">
            {countries.filter(country => country.lenguage === lan).map(country => (
              <Link key={country._id} to={`/${lan}/${country.urlCountry}`}>
                <div className="countryCard">
                  <div className="countryCardFlag">
                    <img src={country.imgRoute} alt="Image Flag" />
                  </div>
                  <div className="countryCardTexts">
                    <h3> {lan == "es" ? "Propiedades en" :  "Properties in"} {country.countryName}</h3>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
        <div className="index__body__texts">
          <div className="index__body__texts__container">
            <p className='justificado'>{pageInfo.p}</p>
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
