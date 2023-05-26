import React from 'react'
function BannerLoader({img}) {
    const imgLink = `http://localhost:8000/assets/images/${img}`
    console.log(imgLink);
  return (
    <div className='bannerLoaderImg'>
      <img src={imgLink} alt="" />
    </div>
  )
}

export default BannerLoader
