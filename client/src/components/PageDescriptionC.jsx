

import React, { useState } from 'react';

function pageDescriptionC({ data }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (!data || !data.p) {
    return null; // Render nothing if data or data.p is undefined
  }
  const maxCharacters = 500;
  // const textToShow = showMore ? data.p : `${data.p.slice(0, 300)}...`;
  const textToShow = data?.p

  return (
    <section className="pageDecription">
      <div className="pageDescriptionContainer">
        <div className="pageDescriptionTexts">
          <h1>{data.h1}</h1>
          <h2>{data.h2}</h2>
          {/* <p className='container-justify'>
            {textToShow}
            {data.p.length > 100 && (
              <div className="btnShowContainer">
              <button className='btnShow' onClick={toggleShowMore}>{showMore ? 'Show less' : 'Show more'}</button>
            </div>
            )}
          </p> */}

          {textToShow && (
        <>
          <div
            className="toggleable-content container-justify"
            dangerouslySetInnerHTML={{
              __html: showMore ? textToShow : `${textToShow.slice(0, maxCharacters)}...`,
            }}
          />
          {textToShow.length > maxCharacters && (
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
    </section>
  );
}

export default pageDescriptionC;






