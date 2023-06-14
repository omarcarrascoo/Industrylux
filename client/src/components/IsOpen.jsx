import React from 'react'

function IsOpen({data}) {
    const [isOpen2, setIsOpen2] = useState(false);
     const toggleMenu2 = () => {
     setIsOpen2(!isOpen2);
      };
  return (
    <div>
      {isOpen2 && data
      .filter(data => data.country === country.urlCountry) // Filter provinces by country
         .map(province => (
         <li key={province._id}>
         <Link to={`es/${country.urlCountry}/${provinceurlProvince}`}>
         <a>{province.provinceName}</a>
         </Link>
         </li>
         ))
         }
    </div>
  )
}

export default IsOpen
