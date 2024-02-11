import React, { useEffect } from 'react';
import '../App.css';

const Footer = () => {
  useEffect(() => {
    const handleFooterPosition = () => {
      const contentHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      const footer = document.querySelector('.footer');
      
      if (contentHeight <= viewportHeight) {
        footer.classList.add('fixed');
      } else {
        footer.classList.remove('fixed'); // Remove 'fixed' class when condition is not met
      }
    };

    handleFooterPosition();

    window.addEventListener('resize', handleFooterPosition);
    
    return () => {
      window.removeEventListener('resize', handleFooterPosition);
    };
  }, []);

  return (
    <footer className='footer'>
      <div className="container">
        <p>&copy; 2024 NSS-NIT. All rights reserved.</p>
        {/* <div class="social-icons">
          <a href="#"><i class="fas fa-facebook"></i></a>
          <a href="#"><i class="fas fa-twitter"></i></a>
          <a href="#"><i class="fas fa-instagram"></i></a>
          <a href="#"><i class="fas fa-linkedin"></i></a>
        </div> */}
      </div>
    </footer>
  );
}


export default Footer;
