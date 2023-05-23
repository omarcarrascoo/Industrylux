import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PageDescription from '../components/pageDescription';
import PropertiesLoader from '../components/propertiesLoader';
const CountryPage = () =>{
  const { country } = useParams();
  const [properties, setProperties] = useState([])
  const fetchProperties =()=>{
    fetch(`http://localhost:8000/api/industrialProperties/find/${country}`)
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      setProperties(data)
    })
  }
  useEffect(()=>{
    fetchProperties()
  },[])
    return(
        <>
            <PageDescription data={country}/>
            <PropertiesLoader properties={properties}/>
        </>
    )
}

export default CountryPage;