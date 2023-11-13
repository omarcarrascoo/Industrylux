

import '../assets/css/style.css';
import logo from '../assets/imgs/INDUSTRYLUX.jpg';
import { FaSearchLocation, FaBars, FaTimes } from 'react-icons/fa';
import { Link, Outlet, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CategoryFilter from './categoryFilter';

const Header = ({alt}) => {
  const {urlProvince, urlCountry, lan} = useParams();
  
  // const { lan } = useParams();
  
  // console.log(urlProvince);

  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [developments, setDevelopments] = useState([]);

  useEffect(() => {
    fetch('https://industrylux.com/api/countries/')
      .then(response => response.json())
      .then(data => setCountries(data));

    fetch('https://industrylux.com/api/provinces/')
      .then(response => response.json())
      .then(data => setProvinces(data));

    fetch('https://industrylux.com/api/cities/')
      .then(response => response.json())
      .then(data => setDevelopments(data));

    fetch(`https://industrylux.com/api/categories/${urlProvince}`)
      .then(response => response.json())
      .then(data => setCategories(data));
  }, [urlProvince, urlCountry, lan]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const optionlan = lan == "es" ? "/en" : "/es"
  const seof = lan == "es"? "bienes-raices-industriales" : "industrial-real-estate"

  return (
    <>
      <header className="mainHeader">
        <div className="containerHeader">
        {isMenuOpen ? false :<div className="mainHeaderLogo">
            <Link to="/">
            <img src="https://industrylux.com/public/images/logoIndustryluxLong.jpg" alt="Logo Industrylux" />
            </Link>
          </div> } 
          
          <div className="menuToggle" onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <nav className={`mainNav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <a>{lan == "es" ? "Propiedades" : "Properties"}</a>
                <ul>
                  {countries.filter(country => country.lenguage === lan)
                  .map(country => (
                    <li key={country._id}>
                      <Link to={`/${lan}/${seof}/${country.urlCountry}`}>{country.countryName}</Link>
                      <ul>
                        {provinces
                          .filter(province => province.country === country.urlCountry &&  province.lenguage === lan)
                          .map(province => (
                            <li key={province._id}>
                              <Link to={`/${lan}/${seof}/${country.urlCountry}/${province.urlProvince}`}>
                                {province.provinceName}
                              </Link>
                              <ul>
                                {developments
                                  .filter(development => development.urlProvince === province.urlProvince &&  development.lenguage === lan).map(development => (
                                <li key={development._id}>
                                <Link to={`/${lan}/${seof}/${country.urlCountry}/${province.urlProvince}/${development.urlCity}`}>
                                {development.cityName}
                              </Link>
                              {/* <ul>
                                
                              </ul> */}
                            </li>
                          ))}
                              </ul>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <CategoryFilter urlProvince={urlProvince} urlCountry={urlCountry} />
              </li>
              <li>
                <Link to={`/${lan}/${seof}/contacto`}>{lan == "es" ? "Contacto" : "Contact"}</Link>
              </li>
              <li>
                <Link to={alt}>{lan == "es" ? "English" : "Español"}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="mainHeaderSpace"></div>
      <main className="outlet">
        <Outlet />
      </main>
    </>
  );
};

export default Header;
