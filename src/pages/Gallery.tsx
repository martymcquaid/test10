import React from 'react'; 

const Gallery = () => ( 
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50"> 
    <header className="sticky top-0 bg-white shadow"> 
      <nav className="container mx-auto flex justify-between p-4"> 
        <h1 className="text-2xl font-bold">Pluimmers</h1> 
        <div className="space-x-4"> 
          <a href="/">Home</a> 
          <a href="/about">About</a> 
          <a href="/services">Services</a> 
          <a href="/gallery">Gallery</a> 
          <a href="/contact">Contact</a> 
          <a href="/contact" className="bg-blue-500 text-white rounded px-4 py-2">Get in Touch</a> 
        </div> 
      </nav> 
    </header> 
    <section className="container mx-auto py-20"> 
      <h2 className="text-4xl font-bold text-center">Our Work</h2> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"> 
        <img src="/path/to/image1.jpg" alt="Gallery Item 1" className="rounded shadow" /> 
        <img src="/path/to/image2.jpg" alt="Gallery Item 2" className="rounded shadow" /> 
        <img src="/path/to/image3.jpg" alt="Gallery Item 3" className="rounded shadow" /> 
      </div> 
    </section> 
  </div> 
); 

export default Gallery;