import React from 'react'; 

const Services = () => ( 
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
      <h2 className="text-4xl font-bold text-center">Our Services</h2> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"> 
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition"> 
          <h3 className="font-semibold">Service One</h3> 
          <p>A brief description of Service One.</p> 
        </div> 
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition"> 
          <h3 className="font-semibold">Service Two</h3> 
          <p>A brief description of Service Two.</p> 
        </div> 
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition"> 
          <h3 className="font-semibold">Service Three</h3> 
          <p>A brief description of Service Three.</p> 
        </div> 
      </div> 
    </section> 
  </div> 
); 

export default Services;