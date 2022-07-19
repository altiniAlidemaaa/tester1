import React from 'react'
import './Contact.scss';
import facebook from '../../images/facebook.jpg';
import gmail from '../../images/gmail.jpg';
import instagram from '../../images/instagram.jpg';
export default function Contact() {
  return (
    <div className='contact'>
      <div className='facebook'>
       
      <h3><img src={facebook} className='facebook-image' /> My facebook: Altin Alidema</h3>  
      </div>
      <div className='gmail'>
        <h3><img src={gmail} className='gmail-image' /> My gmail:altinialidema@gmail.com </h3> 
      </div>
      <div className='instagram'>
        <h3><img src={instagram} className='instagram-image' /> My instagram:Altin Alidema </h3> 
      </div>
    </div>
  )
}
