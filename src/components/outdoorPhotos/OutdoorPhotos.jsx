// import React from 'react';
// import '../weddingphotos/wedding.css';
// import image1 from '../../assets/img4.jpg';


// const images = [
//   { src: image1, alt: 'Image 1' },
//   { src: image1, alt: 'Image 2' },
//   { src: image1, alt: 'Image 3' },
//   { src: image1, alt: 'Image 4' },
//   { src: image1, alt: 'Image 5' }
// ];

// function Gallery() {
//   return (
//     <div className="gallery">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           className="gallery__item"
//           src={image.src}
//           alt={image.alt}
//         />
//       ))}
//     </div>
//   );
// }

// export default Gallery;

import React,{useState} from 'react'
import '../outdoorPhotos/outdoor.css';
import image1 from '../../assets/img4.jpg';



const images = [
    { src: image1, alt: "Image 01" },
    { src: image1, alt: "Image 02" },
    { src: image1, alt: "Image 03" },
    { src: image1, alt: "Image 04" },
    { src: "https://picsum.photos/id/14/1000/1000", alt: "Image 05" },
    { src: "https://picsum.photos/id/15/1000/1000", alt: "Image 06" },
    { src: "https://picsum.photos/id/16/1000/1000", alt: "Image 07" },
    { src: "https://picsum.photos/id/17/1000/1000", alt: "Image 08" },
    { src: "https://picsum.photos/id/18/1000/1000", alt: "Image 09" },
    { src: "https://picsum.photos/id/25/1000/1000", alt: "Image 10" },
    { src: "https://picsum.photos/id/29/1000/1000", alt: "Image 11" },
    { src: "https://picsum.photos/id/46/1000/1000", alt: "Image 12" }
  ];
  

const OutdoorPhotos = () => {
    const [lightboxImage, setLightboxImage] = useState("");
    const [lightboxAltImage, setLightboxAltImage] = useState("");
  
    const openLightbox = (src, alt) => {
      setLightboxImage(src);
      setLightboxAltImage(alt);
    };
  
    const closeLightbox = () => {
      setLightboxImage("");
      setLightboxAltImage("");
    };
  
  return (
    <>
      <div>
        <h1>wedding images</h1><br></br>
      <div className="gallery">
        {images.map((image, index) => (
          <button
            type="button"
            className="gallery__item"
            key={index}
            onClick={() => openLightbox(image.src, image.alt)}
          >
            <img className="gallery__image" src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox">
          <button
            type="button"
            className="lightbox__close-button"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <img
            className="lightbox__image"
            src={lightboxImage}
            alt={lightboxAltImage}
          />
          <button
            type="button"
            className="lightbox__bg"
            onClick={closeLightbox}
          />
        </div>
      )}
    </div>
    </>
  )
}

export default OutdoorPhotos;




