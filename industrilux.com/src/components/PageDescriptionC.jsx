import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function pageDescriptionC({data}) {
    
      
  return (
    <section className="pageDecription">
        <div className="pageDescriptionContainer">
            <div className="pageDescriptionTexts">
                <h1>{data.h1}</h1>
                <h2>{data.h2}</h2>
                <p>{data.p}</p>
            </div>
        </div>
    </section>
  )
}

export default pageDescriptionC
