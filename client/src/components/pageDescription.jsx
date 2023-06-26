

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function PageDescription({ data }) {
  const { country, lan } = useParams();
  const [page, setPage] = useState([]);
  const [showFullText, setShowFullText] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const maxCharacters = 500;

  const fetchPage = () => {
    fetch(`http://localhost:1337/api/countries/findByName/${country}`)
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
       <meta name="description" content={dataPage.metaDescription} />
       <meta name="keywords" content={dataPage.keyWords} />
     </Helmet>
    <section className="pageDecription">
      <div className="pageDescriptionContainer">
        <div className="pageDescriptionTexts">
          <h1>{dataPage?.h1}</h1>
          <h2>{dataPage?.h2}</h2>
          <p className='container-justify'>
            {text && (
              <>
                {showMore ? text : `${text.slice(0, maxCharacters)}...`}
                {text.length > maxCharacters && (
                  <>
                    {' '}
                    {showMore ? (
                      <div className="btnShowContainer">
                        <button className='btnShow' onClick={toggleShowMore}>Mostrar menos</button>
                      </div>
                    ) : (
                      <button className='btnShow' onClick={toggleShowMore}>Mostrar más</button>
                    )}
                  </>
                )}
              </>
            )}
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default PageDescription;
