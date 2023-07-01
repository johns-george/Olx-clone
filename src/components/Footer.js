import React from 'react'
function Footer() {
  return (
    <div className=''>
      <div className="flex justify-between bg-gray-200">
        <div className="p-6">
            <p className='mb-4'>POPULAR LOCATIONS</p>
            <ul>
                <li>Kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
            </ul>
        </div>
        <div className="p-6">
            <p className='mb-4'>ABOUT US</p>
            <ul>
                <li>About Olx</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Olx People</li>
            </ul>
        </div>
        <div className="p-6">
            <p className='mb-4'>OLX</p>
            <ul>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
            </ul>
        </div>
      </div>
      <div className="bg-green-700 flex justify-between px-4 py-3 text-white">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>
    </div>
  )
}

export default Footer
