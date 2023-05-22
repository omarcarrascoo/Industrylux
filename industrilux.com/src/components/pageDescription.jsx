import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function pageDescription({data}) {
    
        const { country } = useParams();
        const [page, setPage] = useState([])
      const fetchPage =()=>{
        fetch(`http://localhost:8000/api/countries/findByName/${country}`)
        .then(response =>{
          return response.json()
        })
        .then(data =>{
          setPage(data[0])
        })
      }
      useEffect(()=>{
        fetchPage()
      },[])
      console.log(data);
  return (
    <section className="pageDecription">
        <div className="pageDescriptionContainer">
            <div className="pageDescriptionTexts">
                <h1>{page.h1}</h1>
                <h2>{page.h2}</h2>
                <p>{page.p}</p>
            </div>
        </div>
    </section>
  )
}

export default pageDescription
