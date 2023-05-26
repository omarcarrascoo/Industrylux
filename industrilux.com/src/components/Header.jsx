import '../assets/css/style.css'
import logo from '../assets/imgs/INDUSTRYLUX.jpg'
import { FaSearchLocation } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';
import CategoryFilter from './categoryFilter'
const Header = () =>{
     
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
  const [categories, setCategories] = useState([])
  const fetchCategories =()=>{
    fetch('http://localhost:8000/api/categories/')
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      setCategories(data)
    })
  }
  useEffect(()=>{
    fetchCategories()
  },[])
  console.log(categories);
    return(
        <>
        <header className="mainHeader">
            <div className="container">
                <div className="mainHeaderLogo">
                   <Link to="/"> <img src="http://localhost:8000/assets/images/logoIndustryluxLong.jpg" alt="Logo Industrylux" /></Link>
                </div>
                <div className="searchBar">
                    <form className='searchBarContainer' action="POST">
                        <input type="text" name='Characteristics' placeholder='Search for a place... '/>
                        <FaSearchLocation />
                </form>
                </div>
                    <nav className="mainNav">
                        <ul>
                            <li> 
                                <a>Properties</a>
                                <ul>
                                {countries.map(country =>(
                                <li key={country._id}>
                                            <Link to={`es/bienes-raices-indusrieales/${country.urlCountry}`}><a> {country.countryName}</a></Link>
                                            <ul>  
                                            {provinces
                                                .filter(province => province.country === country.urlCountry) // Filter provinces by country
                                                .map(province => (
                                                <li key={province._id}>
                                                    <Link to={`es/bienes-raices-indusrieales/${country.urlCountry}/${province.urlProvince}`}>
                                                    <a>{province.provinceName}</a>
                                                    </Link>
                                                </li>
                                                ))
                                                }
                                    </ul>
                                </li>
                                 ))}
                                </ul>
                            </li>
                            <li> 
                                <CategoryFilter  categories= {categories}/>
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