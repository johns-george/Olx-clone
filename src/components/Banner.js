import React from 'react'
import './Banner.css'
import bannerlogo from '../banner copy.png'
function Banner() {
  return (
    <div className="bannerall">
    <div className='banner'>
        <div className="categories">
            <select name="" id="" className='selectcategories'>
                <option value="">All Categories</option>
            </select>
        </div>
      <div className="othercategories">
      <span>Cars</span>
      <span>Mobile Phones</span>
      <span>Scooters</span>
      <span>Bikes</span>
      <span>House for Rent</span>
      <span>Cars</span>
      </div>
    </div>
    <div className='bannerimage'>
        <img src={bannerlogo} alt="Banner Logo" className='bannerimage'/>
      </div>
   </div>
  )
}

export default Banner
