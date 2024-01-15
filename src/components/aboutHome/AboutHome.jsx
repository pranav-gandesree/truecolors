// import React from 'react';
// import { useEffect, useState } from 'react'
// import '../aboutHome/AboutHome.css'
// import TypeAnimations from '../typeanimation/TypeAnimations';
// import weddingPic from '../../assets/img4.jpg';

// const AboutHome = () => {

//   return (
//     <>
//       <div className='aboutHome'>
//         <h2>
//             About Truecolors Photography
//         </h2> <br/>
//         <div className="flexbox">
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam possimus amet quis excepturi iusto, repudiandae numquam eaque dolores natus quibusdam commodi officia nostrum ad molestias ea? Debitis fugiat dolorum aut accusamus cumque tenetur itaque ratione, placeat vero laudantium delectus dolor aperiam inventore pariatur. Vero nihil impedit, magnam quisquam ab ipsam ullam voluptatibus sequi provident neque, odio, delectus perspiciatis? Molestiae error praesentium doloribus, quas placeat modi, consequuntur obcaecati nisi magnam quo illo, impedit ad omnis quaerat. Similique, magnam.</p>
//         <div className="buttons">
//             <button>Know More</button>
//             <button>Contact Us</button>
//         </div>
//         <img src={weddingPic} alt="wedding pic" />
//         </div>
//       </div>
//     </>
//   )
// }

// export default AboutHome;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../aboutHome/AboutHome.css';
import outdoor from '../../assets/New folder/outdoor.jpg';

const AboutHome = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    // Use navigate to navigate to the "About Us" page
    navigate('/about');
  };
  const handleContactClick = () => {
    // Use navigate to navigate to the "About Us" page
    navigate('/contact');
  };
  return (
    <>
      <div className='aboutHome'>
        <h2>About Truecolors Photography</h2> <br />
        <div className="flexbox">
          <div className="text-section">
            <p>
            Welcome to TrueColors Photography, where moments come to life through the lens of creativity! We are a passionate team dedicated to capturing the essence of your most cherished events. With a keen eye for detail and a commitment to storytelling, we specialize in crafting timeless memories for weddings and events. Our mission is to make every photograph a work of art, reflecting the genuine emotions and beauty of your special moments. At TrueColors, we blend technical expertise with an artistic touch, ensuring each image tells a unique story. Join us on a journey where memories unfold in vibrant hues and true emotions shine through every frame.
            </p>
            <div className="buttons">
              <button id='btn1' className='btn-2' onClick={handleKnowMoreClick}> Know More</button>
              <button id='btn2' onClick={handleContactClick}>Contact Us</button>
            </div>
          </div>
          <img src={outdoor} alt="outdoor" />
        </div>
      </div>
    </>
  );
};

export default AboutHome;
