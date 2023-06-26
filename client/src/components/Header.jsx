// import '../assets/css/style.css'
// import logo from '../assets/imgs/INDUSTRYLUX.jpg'
// import { FaSearchLocation } from "react-icons/fa";
// import { Link, Outlet } from 'react-router-dom';
// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import CategoryFilter from './categoryFilter'
// const Header = () =>{
//     const {urlProvince, urlCountry} = useParams()
//     const { lan } = useParams();
//     console.log(lan)
//     const [countries, serCountries] = useState([])
//     const fetchCountries =()=>{
//     fetch('http://localhost:1337/api/countries/')
//     .then(response =>{
//       return response.json()
//     })
//     .then(data =>{
//       serCountries(data)
//     })
//   }
//   useEffect(()=>{
//     fetchCountries()
//   },[])
//   const countriesFilter = countries.filter(element => element.lenguage === lan);

//   console.log(countriesFilter);
//   console.log(countries)
//   const [provinces, setProvinces] = useState([])
//     const fetchProvinces =()=>{
//     fetch('http://localhost:1337/api/provinces/')
//     .then(response =>{
//       return response.json()
//     })
//     .then(data =>{
//       setProvinces(data)
//     })
//   }
//   useEffect(()=>{
//     fetchProvinces()
//   },[])
//   const [categories, setCategories] = useState([])
//   const fetchCategories =()=>{
//     fetch(`http://localhost:1337/api/categories/${urlProvince}`)
//     .then(response =>{
//       return response.json()
//     })
//     .then(data =>{
//       setCategories(data)
//     })
//   }
//   useEffect(()=>{
//     fetchCategories()
//   },[])
//     return(
//         <>
//         <header className="mainHeader">
//             <div className="container">
//                 <div className="mainHeaderLogo">
//                    <Link to="/panel/"> <img src="http://localhost:1337/public/images/logoIndustryluxLong.jpg" alt="Logo Industrylux" /></Link>
//                 </div>
//                 <div className="searchBar">
//                     <form className='searchBarContainer' action="POST">
//                         <input type="text" name='Characteristics' placeholder='Search for a place... '/>
//                         <FaSearchLocation />
//                 </form>
//                 </div>
//                     <nav className="mainNav">
//                         <ul>
//                             <li> 
//                                 <a>Properties</a>
//                                 <ul>
//                                 {countries.map(country =>(
//                                 <li key={country._id}>
//                                             <Link to={`es/${country.urlCountry}`}> {country.countryName}</Link>
//                                             <ul>  
//                                             {provinces
//                                                 .filter(province => province.country === country.urlCountry) // Filter provinces by country
//                                                 .map(province => (
//                                                 <li key={province._id}>
//                                                     <Link to={`es/${country.urlCountry}/${province.urlProvince}`}>
//                                                     {province.provinceName}
//                                                     </Link>
//                                                 </li>
//                                                 ))
//                                                 }
//                                     </ul>
//                                 </li>
//                                  ))}
//                                 </ul>
//                             </li>
//                             <li> 
//                                 {
//                                   urlProvince && <CategoryFilter categories={categories} urlProvince={urlProvince}urlCountry={urlCountry} />
//                                   // if(urlProvince){
//                                   //   <CategoryFilter  categories= {categories}/>
//                                   // }
//                                 /* <CategoryFilter  categories= {categories}/> */
//                                 }
                                
//                             </li>
//                             <li><Link to="/panel/es/contacto">Contacto</Link></li>
//                             <li><Link to={`/en`}>English</Link></li></ul>
//                     </nav>
//                 </div>
//         </header>
//         <main className="outlet">
//             <Outlet/>
//         </main>
//         </>
//     )
// };

// export default Header;


import '../assets/css/style.css';
import logo from '../assets/imgs/INDUSTRYLUX.jpg';
import { FaSearchLocation, FaBars, FaTimes } from 'react-icons/fa';
import { Link, Outlet, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CategoryFilter from './categoryFilter';

const Header = () => {
  const {urlProvince, urlCountry, lan} = useParams();
  // const { lan } = useParams();
  
  // console.log(urlProvince);

  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/countries/')
      .then(response => response.json())
      .then(data => setCountries(data));

    fetch('http://localhost:1337/api/provinces/')
      .then(response => response.json())
      .then(data => setProvinces(data));

    fetch(`http://localhost:1337/api/categories/${urlProvince}`)
      .then(response => response.json())
      .then(data => setCategories(data));
  }, [urlProvince]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const optionlan = lan == "es" ? "/en" : "/es"

  // const filterCountry = countries.filter(element => element.lenguage === lan);
  // console.log(filter);
  return (
    <>
      <header className="mainHeader">
        <div className="containerHeader">
        {isMenuOpen ? false :<div className="mainHeaderLogo">
            <Link to="/panel/">
            <img src="http://localhost:1337/public/images/logoIndustryluxLong.jpg" alt="Logo Industrylux" />
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
                      <Link to={`/${lan}/${country.urlCountry}`}>{country.countryName}</Link>
                      <ul>
                        {provinces
                          .filter(province => province.country === country.urlCountry &&  province.lenguage === lan)
                          .map(province => (
                            <li key={province._id}>
                              <Link to={`/${lan}/${country.urlCountry}/${province.urlProvince}`}>
                                {province.provinceName}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                {urlProvince ? <CategoryFilter categories={categories} urlProvince={urlProvince} urlCountry={urlCountry} />:""}
              </li>
              <li>
                <Link to={`/${lan}/contacto`}>{lan == "es" ? "Contacto" : "Contact"}</Link>
              </li>
              <li>
                <Link to={optionlan}>{lan == "es" ? "English" : "Español"}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="outlet">
        <Outlet />
      </main>
    </>
  );
};

export default Header;
