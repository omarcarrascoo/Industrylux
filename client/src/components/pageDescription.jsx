import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function pageDescription({data, maxLength}) {
      const [showFullText, setShowFullText] = useState(false);
    
      const toggleText = () => {
        setShowFullText(!showFullText);
      };


      const { country } = useParams();
      const [page, setPage] = useState([])
      const fetchPage =()=>{
        fetch(`http://174.138.95.49/api/countries/findByName/${country}`)
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
      const text = page.p
  return (
    <section className="pageDecription">
        <div className="pageDescriptionContainer">
            <div className="pageDescriptionTexts">
                <h1>{page.h1}</h1>
                <h2>{page.h2}</h2>
                <p>{text}</p>
                {/* <div>
                  {showFullText ? (
                    <p>{text}</p>
                  ) : (
                    <p>{text.slice(0, maxLength)}...</p>
                  )}
                  <button onClick={toggleText}>
                    {showFullText ? 'Show Less' : 'Show More'}
                  </button>
              </div> */}
            </div>
        </div>
    </section>
  )
}

export default pageDescription;
