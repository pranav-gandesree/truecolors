
import React,{useState} from 'react';
import '../Form/Form.css';
import {database} from '../../config/firebase';
import { collection, addDoc } from "firebase/firestore"; 


const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const docRef = await addDoc(collection(database, "users"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }

  return (
    <>
      <div className="contain">
        <div className="wrapper">
          <div className="form">
            <h4>CONTACT US</h4><br />
            <h3 className="form-headline">Send us a message</h3>
            <form id="submit-form" onSubmit={handleSubmit}>
              <p>
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  placeholder="Your Name*"
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
                {/* <small className="name-error"></small> */}
              </p>
              <p>
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  placeholder="Your Email*"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
                {/* <small className="name-error"></small> */}
              </p>
              <p className="full-width">
                <textarea
                  minLength="20"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Your Message*"
                  required
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <small></small>
              </p>
              <p className="full-width">
                <input
                  type="submit"
                  className="submit-btn"
                  value="Send Message"
                />    
              </p>
            </form>
          </div>

        </div>
      </div>



    </>
  );
};

export default ContactForm;
