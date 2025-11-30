import React from 'react'; 

const Contact = () => ( 
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
      <h2 className="text-4xl font-bold text-center">Get in Touch</h2> 
      <form className="mt-8"> 
        <div className="mb-4"> 
          <label className="block text-sm font-medium">Name</label> 
          <input type="text" className="border rounded w-full p-2" /> 
        </div> 
        <div className="mb-4"> 
          <label className="block text-sm font-medium">Email</label> 
          <input type="email" className="border rounded w-full p-2" /> 
        </div> 
        <div className="mb-4"> 
          <label className="block text-sm font-medium">Message</label> 
          <textarea className="border rounded w-full p-2" rows={4}></textarea> 
        </div> 
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 hover:scale-105 transition">Submit</button> 
      </form> 
      <div className="mt-8"> 
        <p>Contact us at: info@pluimmers.com or (123) 456-7890</p> 
      </div> 
    </section> 
  </div> 
); 

export default Contact;