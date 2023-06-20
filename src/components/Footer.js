import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footerdiv'>
      <div className="footertop">
        <div className="footerleft">
            <p>POPULAR LOCATIONS</p>
            <ul>
                <li>kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
            </ul>
        </div>
        <div className="footermidd">
            <p>ABOUT US</p>
            <ul>
                <li>About Olx</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Olx People</li>
            </ul>
        </div>
        <div className="footerright">
            <p>OLX</p>
            <ul>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
            </ul>
        </div>
      </div>
      <div className="footerbot">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>
    </div>
  )
}

export default Footer
