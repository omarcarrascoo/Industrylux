import { useState, useEffect } from 'react'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Index() {
  const [HomeInfo, setHomeInfo] = useState([])
  const { lan } = useParams();
  const seof = lan == "es"? "bienes-raices-industriales" : "industrial-real-estate"
  const optionlan = lan == "es" ? "/en" : "/es"
  const seofOp= lan == "es"? "industrial-real-estate": "bienes-raices-industriales" 
  const optionlanText = lan == "es" ? "English" : "Español"
  const fetchHomeInfo =()=>{
    fetch('https://industrylux.com/api/homes/')
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      
      setHomeInfo(data)
    })
  }
  const [countries, serCountries] = useState([])
  const fetchCountries =()=>{
    fetch('https://industrylux.com/api/countries/')
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      serCountries(data)
    })
  }
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  useEffect(()=>{
    fetchCountries()
    fetchHomeInfo()
  },[lan])
  const filteredHomeInfo = HomeInfo.filter(element => element.lenguage === lan);
  const pageInfo = filteredHomeInfo[0] || 0
  const maxCharacters = 500;
  // const textToShow = showMore ? data.p : `${data.p.slice(0, 300)}...`;
  const textToShow = pageInfo?.p
  const advertclick = () =>{
    console.log(lan);
    console.log(seof);
  }
  return (
    <>
    <Helmet>
        <title>{pageInfo.titleTag}</title>
        <meta name='description' content={pageInfo.metadescription} />
        <meta name='keywords' content={pageInfo.keyWords} />
    </Helmet>
      <div className="index">
        <header className="indexHeader">
          <div className="container__indexHeader">
              <Link to={`${optionlan}/${seofOp}`} onClick={advertclick}>{optionlanText}</Link>
          </div>
      </header>
      <main className="index__main">
        <div className="index__main__logo">
          <img src="https://industrylux.com/public/images/logo-industrilux.jpg" alt="industrilux logo jpg" />
        </div>
        <div className="index__main__titles">
          <h1>{pageInfo.h1}</h1>
          <h2 className='title-page'>{pageInfo.h2}</h2>
        </div>
        <div className="index__coutry__selecetor">
          <div className="indexCountrySelectorContainer">
            {countries.filter(country => country.lenguage === lan).map(country => (
              <Link key={country._id} to={`/${lan}/${seof}/${country.urlCountry}`}>
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
            {/* <p className='justificado'>{pageInfo.p}</p> */}
            {textToShow && (
        <>
          <div
            className="toggleable-content container-justify"
            dangerouslySetInnerHTML={{
              __html: showMore ? textToShow : `${textToShow.slice(0, maxCharacters)}...`,
            }}
          />
          {textToShow.length > maxCharacters && (
            <div className="btnShowContainer">
              <button className="btnShow" onClick={toggleShowMore}>
                {showMore ? 'Mostrar menos' : 'Mostrar más'}
              </button>
            </div>
          )}
        </>
      )}
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
