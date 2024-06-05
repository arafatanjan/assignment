import React from 'react';
import bannerphoto from '../../../public/asset/0fe21ab4-ec05-4427-b1c1-d5bba222b945.png'

const Banner = () => {
return (
 <div className="hero" style={{
  backgroundImage: `url(${bannerphoto})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  position: 'relative'
}}>

<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-md">
<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
<p className="mb-5">Our expert instructors will guide you through the exciting world of AI, delving into machine learning, deep learning, natural language processing, and more. Through a blend of interactive learning modules, practical exercises, and real-world case studies.</p>
<button className="btn btn-primary">Get Started</button>
 </div>
 </div>
</div>
  );
};

export default Banner;