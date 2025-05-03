// File: components/Header.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>Noble Cafe & Bakery</h1>
        </Link>
      </div>
      
      {isMobile ? (
        <>
          <button 
            className={styles.hamburger} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.line1Open : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.line2Open : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.line3Open : ''}`}></span>
          </button>
          
          <nav className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}>
            <ul>
              <li><Link href="/menu" onClick={closeMenu}>MENU</Link></li>
              <li><Link href="/about" onClick={closeMenu}>ABOUT US</Link></li>
            </ul>
          </nav>
        </>
      ) : (
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/menu">MENU</Link></li>
            <li><Link href="/about">ABOUT US</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;