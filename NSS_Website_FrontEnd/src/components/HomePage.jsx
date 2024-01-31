import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

function HomePage() {
  return (



    <div className='HomePage'>
      {/* Header Section */}

      <header className='text-center'>
        <div className='logo'>
          <img src="/src/images/nss_logo.png" alt="NSS Logo" />
        </div>
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
      </header>



      {/* Add your other sections or components below */}
    </div>
  );
}

export default HomePage;
