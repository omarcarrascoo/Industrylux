

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function PageDescription({ data }) {
  const { urlCountry, lan } = useParams();
  const [page, setPage] = useState([]);
  const [showFullText, setShowFullText] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const maxCharacters = 500;

  const fetchPage = () => {
    fetch(`https://industrylux.com/api/countries/findByName/${urlCountry}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPage(data);
      });
  };

  useEffect(() => {
    fetchPage();
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const filteredHomeInfo = page.filter(element => element.lenguage === lan);
  const dataPage = filteredHomeInfo[0] || 0
  const text = dataPage?.p;
  return (
    <>
    <Helmet>
       <title>{dataPage.titleTag}</title>
       <meta name="description" content={dataPage.metadescription} />
       <meta name="keywords" content={dataPage.keyWords} />
     </Helmet>
    <section className="pageDecription">
      <div className="pageDescriptionContainer">
        <div className="pageDescriptionTexts">
          <h1 className='title-page'>{dataPage?.h1}</h1>
          <h2 className='title-page'>{dataPage?.h2}</h2>
    <div className="container-justify">
      {text && (
        <>
          <div
            className="toggleable-content"
            dangerouslySetInnerHTML={{
              __html: showMore ? text : `${text.slice(0, maxCharacters)}...`,
            }}
          />
          {text.length > maxCharacters && (
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
      </div>
    </section>
    </>
  );
}

export default PageDescription;
