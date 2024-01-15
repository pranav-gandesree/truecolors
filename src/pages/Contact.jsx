import React from 'react';
import ContactForm from '../components/Form/ContactForm';
import ContactRight from '../components/ContactRight/ContactRight';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styled from 'styled-components';
// import emailjs from '@emailjs/browser'

const ContactLayout = styled.div`
  display: flex;
  flex-direction: row; 

 @media (max-width: 900px) {
    flex-direction:column-reverse;
  } 
`;

const IFrame = styled.a`
  iframe {
    border: 0;
    display: flex;
    justify-content: center;
    position: relative;

    /* Default styles for larger screens */
    width: 1090px;
    height: 230px;
    left: 20px;
    bottom: 20px;

    /* Media queries for responsive design */
    @media screen and (max-width: 768px) {
      /* Styles for screens up to 768px wide */
      width: 90%;
      margin-left: -26px;
    }

    @media screen and (min-width: 769px) and (max-width: 1200px) {
      /* Styles for screens between 769px and 1200px wide */
      width: 90%;

    }

    @media screen and (min-width: 1201px) {
      /* Styles for screens wider than 1200px */
      width: 1090px;
      height: 230px;
    }
  }
`;

export default function Contact() {

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  return (
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="d-none d-lg-block"
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            // value: "#3c3c3c",
            // value: "#212d31",
            //  value: "#1a202c",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#f794c8",
          },
          links: {
            color: "#f794c8",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />

      <ContactLayout>
              <ContactForm/>
              <ContactRight/>
      </ContactLayout>

    
      <IFrame>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1320.6936389608775!2d78.53956690729845!3d17.488536840936437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b0d76353f89%3A0x2727402f79a48297!2s821%2C%20Sai%20Nagar%20Rd%2C%20Hill%20Top%20Colony%2C%20Sainikpuri%2C%20Secunderabad%2C%20Telangana%20500056!5e0!3m2!1sen!2sin!4v1699625527415!5m2!1sen!2sin"
                  title="myFrame" 
                  width="1090"
                  height="230"
                  style={{ 
                    border: 0,  display: "flex",
                    justifyContent: "center", left:"50px", position: "relative",
                   }} 
                  allowFullScreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </IFrame> 
  
    </>
  )
}




