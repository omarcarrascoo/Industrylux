import '../assets/css/style.css'
import logo from '../assets/imgs/INDUSTRYLUX.jpg'
import { FaSearchLocation } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Header = () =>{
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
     };
     const [isOpen2, setIsOpen2] = useState(false);
     const toggleMenu2 = () => {
     setIsOpen2(!isOpen2);
      };
     
    const [countries, serCountries] = useState([])
    const fetchCountries =()=>{
    fetch('http://localhost:8000/api/countries/')
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
  const [provinces, setProvinces] = useState([])
    const fetchProvinces =()=>{
    fetch('http://localhost:8000/api/provinces/')
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      setProvinces(data)
    })
  }
  useEffect(()=>{
    fetchProvinces()
  },[])
  console.log(countries);

    return(
        <>
        <header className="mainHeader">
            <div className="container">
                <div className="mainHeaderLogo">
                   <Link to="/"> <img src={logo} alt="Logo Industrylux" /></Link>
                </div>
                <div className="searchBar">
                    <form className='searchBarContainer' action="POST">
                        <input type="text" name='Characteristics' placeholder='Search for a place... '/>
                        <FaSearchLocation />
                </form>
                </div>
                    <nav className="mainNav">
                        <ul className='ulNav'>
                            <li> 
                                <button onClick={toggleMenu}>Properties</button>
                                <ul>
                                {isOpen && countries.map(country =>(
                                <li key={country._id}>
                                            <button onClick={toggleMenu2}> {country.countryName}</button>
                                            <ul>  
                                            {isOpen2 && provinces
                                                .filter(province => province.country === country.urlCountry) // Filter provinces by country
                                                .map(province => (
                                                <li key={province._id}>
                                                    <Link to={`es/bienes-raices-indusrieales/${country.urlCountry}/${province.urlProvince}`}>
                                                    <button>{province.provinceName}</button>
                                                    </Link>
                                                </li>
                                                ))
                                                }
                                            </ul>
                                </li>
                                 ))}
                                </ul>
                            </li>
                            <li><Link to="/es/bienes-raices-indusrieales/contacto">Contacto</Link></li>
                            <li><Link to="/en/Properities">English</Link></li></ul>
                    </nav>
                </div>
        </header>
        <main className="outlet">
            <Outlet/>
        </main>
        </>
    )
};

export default Header;