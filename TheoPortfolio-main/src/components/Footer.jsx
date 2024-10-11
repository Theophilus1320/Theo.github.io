import React from 'react';

export default function Footer() {
  let presentDate = new Date();
  let year = presentDate.getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Phone: +234 7019681052</p>
          <p>Mobile: +234 8033134026</p>
          <p>Email: <a href="mailto:theophiluspep@gmail.com">theophiluspep@gmail.com</a></p>
        </div>

        <div className="footer-section">
          <h4 className='soc'>Social</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/theophilus-hemba-34121b194" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Location</h4>
          <p>Lagos, Nigeria</p>
        </div>
        
      </div>
      

      <div className="line"></div>
      <div className="copy">
        <p>Theophilus Hemba &copy; {year}</p>
      </div>
    </footer>
  );
}
