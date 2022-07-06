import React from 'react'
import { FaInstagram, FaMailBulk } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className='container-footer'>
        <footer className='footer'>
            <ul>
                <li><FaInstagram color='white'/><span>joshuaravael</span></li>
                <li><FaMailBulk color='white'/><span>jravaell@gmail.com</span></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer