import React, { useState, useEffect } from 'react';
import '../App';
import '../styles/homepage.css'
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component

function HomePage() {
  return (
    <div className='container'>
      {/* Header Section */}
      <Header />


      {/* Main Content Section */}
      <main className='main-content'>\

        <div className='header-text'>
          <h1>Hello there volunteers....!</h1>
          <div>
            <i>Not me, but you</i>
          </div>
        </div>



        <div>
          <h2 className='h2'>Welcome to NSS NITC</h2>
          <p className='para'>
            National Service Scheme (NSS) is a central sector scheme of the Government of India,
            Ministry of Youth Affairs & Sports. It provides opportunities for student youth to participate
            in various government-led community services and programs. With this organization, students can
            build their character, maintain discipline, develop leadership skills, and become individuals who understand human nature.
          </p>
        </div>
      </main>


      <div className='header-content-container'>
        <div className='header-content'>
          {/* Staff in charge card */}
          <div className='card'>
            <h3>Faculty in Charge</h3>
            <p>Name: Dr. Reju</p>
            <p>Role: Coordinator</p>
            <p>Email: reju@nitc.ac.in</p>
          </div>

          {/* Unit 1 card */}
          <div className='card'>
            <h3>Unit 1</h3>
            <p>Unit Head: </p>
            <p>Contact: </p>
          </div>

          {/* Unit 2 card */}
          <div className='card'>
            <h3>Unit 2</h3>
            <p>Unit Head: </p>
            <p>Contact: </p>
          </div>

          {/* Unit 3 card */}
          <div className='card'>
            <h3>Unit 3</h3>
            <p>Unit Head: </p>
            <p>Contact: </p>
          </div>

          {/* Unit 4 card */}
          <div className='card'>
            <h3>Unit 4</h3>
            <p>Unit Head: </p>
            <p>Contact: </p>
          </div>
        </div>
      </div>




      <div>
        {/* Footer Section */}
        <Footer />
      </div>


    </div>
  );
}

export default HomePage;
