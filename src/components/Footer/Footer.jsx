import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>LoreDolore laudantium harum cupiditate unde tempora corrupti debitis quidem iure, 
                 enim voluptatibus cumque repellend totam dignissimos cumque nesciunt iste ipsa ullam et ea tempore,
                  labore dolores a 
                 aperiam error doloremque ipsam harum? Consectetur voluptates reprehenderit, 
                 voluptate officiis soluta quod animi saepe officia, iure, aliquam veritatis pariatur. Eum aliquid, 
                 Minima.</p>
                 <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon}alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Contact</h2>
                <ul>
                    <li>+91-7090606760</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
            

        </div>
         <hr />
         <p className='footer-copyright'>copyright @ tomato.com 2024 all right are reserved</p>
    </div>
  )
}

export default Footer