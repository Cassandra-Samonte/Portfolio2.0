import React from 'react';
import './styles.css';

export default function Footer() {
  return (
    <footer className="footer flex justify-between items-center p-4 px-20">
      <p className="footertext">© 2024 Cassandra Samonte • Redondo Beach, CA</p>
      <ul className="px-10">
        <li className="mb-2">
          <a href="https://github.com/Cassandra-Samonte" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
        </li>
        <li className="mb-2">
          <a href="https://www.linkedin.com/in/cassandra-samonte/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1oPc9IlPGzCqwij1D57rf2pHZ7q8kH6Q8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Resume</a>
        </li>
      </ul>
    </footer>
  );
}

