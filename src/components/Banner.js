import React from 'react'
import bannerlogo from '../banner copy.png'
function Banner() {
  return (
    <div className="">
    <div className='flex h-12 p-2 text-xl ml-8'>
        <div className="">
            <select name="" id="" className='selectcategories'>
                <option value="">All Categories</option>
                <option value="">Cars</option>
                <option value="">Mobile Phones</option>
                <option value="">Scooters</option>
                <option value="">Bikes</option>
                <option value="">House For Rent</option>
                <option value="">Cars</option>
            </select>
      </div>
      </div>
    <div>
        <img src={bannerlogo} alt="Banner Logo" className='w-screen xs:h-40 lg:h-64'/>
      </div>
   </div>
  )
}

export default Banner
