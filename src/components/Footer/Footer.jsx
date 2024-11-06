import React from 'react'
import './Footer.css'



const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='footer'>
            {year} &copy; Designed & Built by      
            <a href="https://dilliraja.com" target="_blank" rel="noopener noreferrer">
            <span>&lt;Dilli Raja/&gt;</span>
        </a> 
            
    </div>
  )
}

export default Footer
