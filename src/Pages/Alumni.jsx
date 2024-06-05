import React from 'react';
import photo1 from '../../public/asset/s1.jpg'
import photo2 from '../../public/asset/s2.jpg'
import photo3 from '../../public/asset/s3.jpg'
import photo4 from '../../public/asset/s4.jpg'
import photo5 from '../../public/asset/s5.jpg'
import photo6 from '../../public/asset/s6.jpg'
import photo7 from '../../public/asset/s7.jpg'
import photo8 from '../../public/asset/s8.jpg'
import photo9 from '../../public/asset/s9.jpg'
import photo10 from '../../public/asset/s10.jpg'
import photo11 from '../../public/asset/s11.jpg'
import photo12 from '../../public/asset/s12.jpg'
import photo13 from '../../public/asset/s13.jpg'
import photo14 from '../../public/asset/s14.jpg'
import photo15 from '../../public/asset/s15.jpg'
import "./Alumni.css"


const photos = [
    { src: photo1, size: 'large' },
    { src: photo2, size: 'medium' },
    { src: photo3, size: 'small' },  
    { src: photo4, size: 'medium' },
    { src: photo5, size: 'large' },
    { src: photo6, size: 'small' },
    { src: photo7, size: 'medium' },
    { src: photo8, size: 'large' },
    { src: photo9, size: 'small' },
    { src: photo10, size: 'medium' },
    { src: photo11, size: 'large' },
    { src: photo12, size: 'small' },
    { src: photo13, size: 'medium' },
    { src: photo14, size: 'large' },
    { src: photo15, size: 'large' },
  ];

const Alumni = () => {
    return (
      <div><h1 className="text-3xl font text-center my-8 text-black bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent shadow-md transition duration-300 ease-in-out transform hover:scale-105">Our Alumni</h1>
        <div className="collage-container">
      {photos.map((photo, index) => (
        <img key={index} src={photo.src} alt={`Photo ${index + 1}`} className={`collage-photo ${photo.size}`} />
        
      ))}
      
    </div>
    </div>
    );
};

export default Alumni;