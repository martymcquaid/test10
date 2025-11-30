import React from 'react'; 

const About = () => ( 
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
    <section className="container mx-auto py-20 flex flex-col md:flex-row"> 
      <div className="md:w-1/2"> 
        <h2 className="text-4xl font-bold">Who We Are</h2> 
        <p className="mt-4">Pluimmers is dedicated to providing quality craftsmanship in every project we undertake. Our mission is to combine artistry with functionality to create beautiful and practical solutions.</p> 
        <ul className="list-disc mt-4 pl-5"> 
          <li>Quality Materials</li> 
          <li>Expert Craftsmanship</li> 
          <li>Customer Satisfaction</li> 
          <li>Innovative Designs</li> 
        </ul> 
      </div> 
      <div className="md:w-1/2 mt-4 md:mt-0"> 
        <img src="/path/to/image.jpg" alt="About Us" className="rounded shadow" /> 
      </div> 
    </section> 
  </div> 
); 

export default About;