import React,{useState} from 'react'
import '../weddingphotos/wedding.css';
import image1 from '../../assets/img4.jpg';
import image2 from '../../assets/11.jpg';
import image3 from '../../assets/img5.jpg';
import image4 from '../../assets/img18.JPG';
import image5 from '../../assets/12.jpg';
import image6 from '../../assets/09.jpg';
import image7 from '../../assets/img8.jpg';
import image8 from '../../assets/img19.JPG';
import image9 from '../../assets/01d.jpg';
import image10 from '../../assets/01.jpg';
import image11 from '../../assets/16.JPG';
import image12 from '../../assets/img17.jpg';
import image13 from '../../assets/event.jpg';
import image14 from '../../assets/event2.jpg';
import image15 from '../../assets/wedding.jpg';
import image16 from '../../assets/wedding/wedding2.JPG';
import image17 from '../../assets/New folder/outdoor2.jpg';
import image18 from '../../assets/New folder/outdoor.jpg';
import image19 from '../../assets/00.JPG';
import image20 from '../../assets/wedding/wedding3.jpg';
import image21 from '../../assets/wedding/wedding4.JPG';
import image22 from '../../assets/wedding/wedding5.JPG';
import image23 from '../../assets/wedding/wedding6.JPG';
import image24 from '../../assets/14.jpg';



const images = [
    { src: image1, alt: "Image 01" },
    { src: image5, alt: "Image 05" },
    { src: image6, alt: "Image 06" },
    { src: image12, alt: "Image 12" },
    { src: image4, alt: "Image 04" },
    { src: image3, alt: "Image 03" },
    { src: image7, alt: "Image 07" },
    { src: image11, alt: "Image 11" },
    { src: image13, alt: "Image 13" },
    { src: image14, alt: "Image 14" },
    { src: image2, alt: "Image 02" },
    { src: image15, alt: "Image 15" },
    { src: image16, alt: "Image 16" },
    { src: image23, alt: "Image 23" },
    { src: image17, alt: "Image 17" },
    { src: image18, alt: "Image 18" },
    { src: image19, alt: "Image 19" },
    { src: image20, alt: "Image 20" },
    { src: image21, alt: "Image 21" },
    { src: image24, alt: "Image 24" },
    
    { src: image8, alt: "Image 04" },
    { src: image9, alt: "Image 04" },
    { src: image10, alt: "Image 04" },
    { src: image22, alt: "Image 22" },
    
  ];
  

const WeddingPhotos = () => {
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
        {/* <h1>wedding images</h1><br></br> */}
      <div className="gallery">
        {images.map((image, index) => (
          <button
            type="button"
            className="gallery__item"
            key={index}
            onClick={() => openLightbox(image.src, image.alt)}
          >
            <img className="gallery__image" src={image.src} alt={image.alt} loading='lazy' />
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

export default WeddingPhotos;




