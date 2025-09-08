import React from 'react'
import Container from './shared/Container'
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedin , FaTiktok} from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-black text-white p-5'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 justify-center'>
          <div className='space-y-2'>
            <h1>PeeDELL's</h1>
            <p>Your one-stop shop for all fragrance needs</p>
            <p>&copy; 2025 PeeDELL. All rights reserved.</p>
          </div>

          <div>
            <h2>Quick Links</h2>
            <ul className=' space-y-3 italic font-medium '>
              <li><a href="">Home</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h2>Connect With Us</h2>
          <ul className='flex justify-start space-x-7 gap-3 italic'>
            <li><a href=""><FaFacebookF  size={25}/></a></li>
            <li><a href=""><FaTwitter  size={25}/></a></li>
            <li><a href=""><FaInstagramSquare  size={25}/></a></li>
            <li><a href=""><FaLinkedin  size={25}/></a></li>
            <li><a href=""><FaTiktok  size={25}/></a></li>

          </ul>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer

