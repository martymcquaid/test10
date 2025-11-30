import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Home = () => ( 
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white to-gray-100"> 
    <header className="sticky top-0 bg-white shadow"> 
      <nav className="container mx-auto flex justify-between p-4"> 
        <h1 className="text-2xl font-bold">Pluimmers</h1> 
        <div className="space-x-4"> 
          <Link to="/">Home</Link> 
          <Link to="/about">About</Link> 
          <Link to="/services">Services</Link> 
          <Link to="/gallery">Gallery</Link> 
          <Link to="/contact">Contact</Link> 
          <Link to="/contact" className="bg-blue-500 text-white rounded px-4 py-2">Get in Touch</Link> 
        </div> 
      </nav> 
    </header> 
    <section className="text-center py-20"> 
      <h2 className="text-5xl font-bold">Pluimmers</h2> 
      <p className="text-xl mt-4">Quality, Craftsmanship, and Care.</p> 
      <div className="mt-8"> 
        <Link to="/about" className="bg-blue-500 text-white rounded px-6 py-3 mr-4 hover:scale-105 transition">Learn More</Link> 
        <Link to="/contact" className="bg-gray-300 text-gray-800 rounded px-6 py-3 hover:scale-105 transition">Contact Us</Link> 
      </div> 
    </section> 
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

export default Home;