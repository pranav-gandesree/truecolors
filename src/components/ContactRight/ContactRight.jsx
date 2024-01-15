import React from 'react'
import '../ContactRight/ContactRight.css'
import ContactCard from '../ContactCard'

const ContactRight = () => {
  return (
    <>
     <div className="right">
        <h2 className='heading'>Welcome to TrueColors Photography!</h2>
        <span> We're thrilled that you're considering us for your photography needs. Whether you have questions, want to discuss a potential project, or just want to say hello, we're here for you.</span>
        <ContactCard
          email="contact@example.com"
          phone="7901024455"
          instagram="truecolors._photography"
          address="Sanikpuri, Hyderabad" 
          />
     </div>

    </>
  )
}

export default ContactRight;
