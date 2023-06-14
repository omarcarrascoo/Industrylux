// import React from 'react'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';

// function pageDescriptionC({data}) {
    
//   console.log(data);
//   return (
//     <section className="pageDecription">
//         <div className="pageDescriptionContainer">
//             <div className="pageDescriptionTexts">
//                 <h1>{data.h1}</h1>
//                 <h2>{data.h2}</h2>
//                 <p>{data.p}</p>
//             </div>
//         </div>
//     </section>
    
//   )
// }

// export default pageDescriptionC

import React, { useState } from 'react';

function pageDescriptionC({ data }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (!data || !data.p) {
    return null; // Render nothing if data or data.p is undefined
  }

  const textToShow = showMore ? data.p : `${data.p.slice(0, 300)}...`;

  return (
    <section className="pageDecription">
      <div className="pageDescriptionContainer">
        <div className="pageDescriptionTexts">
          <h1>{data.h1}</h1>
          <h2>{data.h2}</h2>
          <p>
            {textToShow}
            {data.p.length > 100 && (
              <div className="btnShowContainer">
              <button className='btnShow' onClick={toggleShowMore}>{showMore ? 'Show less' : 'Show more'}</button>
            </div>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export default pageDescriptionC;






