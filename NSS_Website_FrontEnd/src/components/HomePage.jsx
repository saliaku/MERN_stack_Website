import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component

function HomePage() {
  return (
    <div className='container'>
      {/* Header Section */}
      <Header />


      {/* Main Content Section */}
      <main className='main-content'>
        {/* Add your main content here */}

        <div className='header-content'>
          <h1>Hello there volunteers....!</h1>
          <i>Not me, but you</i>
          <h2>Welcome to NSS NITC</h2>
          <p>
            National Service Scheme (NSS) is a central sector scheme of the
            Government of India, Ministry of Youth Affairs & Sports. It provides
            opportunities for student youth to participate in various
            government-led community services and programs. With this
            organization, students can build their character, maintain
            discipline, develop leadership skills, and become individuals who
            understand human nature.
          </p>
        </div>

      </main>

      {/* Footer Section */}
      <Footer/>

    </div>
  );
}

export default HomePage;
