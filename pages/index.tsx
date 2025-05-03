// File: pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noble Cafe | Modern Art-Inspired Coffee Experience</title>
        <meta name="description" content="Experience the blend of art and coffee at Noble Cafe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>CRAFTING EXCEPTIONAL<br />COFFEE EXPERIENCES</h1>
            <p>Where art meets taste in the heart of the city.</p>
            <Link href="/menu">
              <button className={styles.primaryButton}>DISCOVER OUR COFFEE</button>
            </Link>
          </div>
          <div className={styles.heroImage}>
            <img src="/hero.jpg" alt="Barista pouring latte art" />
          </div>
        </section>

        <section className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Our Story</h3>
            <p>Founded on the principles of quality, artistry, and community.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>The Space</h3>
            <p>A minimal, intentional environment designed for connection.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>The Coffee</h3>
            <p>Ethically sourced, meticulously roasted, expertly prepared.</p>
          </div>
        </section>

        <section className={styles.gallerySection}>
          <h2>THE EXPERIENCE</h2>
          <div className={styles.galleryText}>
            <p>Step into a space where every detail has been considered. From the warmth of our interior to the personal touch of our service, we've crafted an environment that invites you to slow down and savor the moment.</p>
          </div>
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <img src="/gallery1.jpg" alt="Noble Cafe interior" />
              <div className={styles.galleryCaption}>
                <p>A space designed for connection</p>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img src="/gallery2.jpg" alt="Coffee preparation" />
              <div className={styles.galleryCaption}>
                <p>Artistry in every cup</p>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img src="/gallery3.jpg" alt="Community events" />
              <div className={styles.galleryCaption}>
                <p>Where community thrives</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h2>Noble Cafe & Bakery</h2>
          </div>
          <div className={styles.footerNav}>
            <div className={styles.footerColumn}>
              <h3>Visit</h3>
              <p>918 Chestnut Ridge Rd</p>
              <p>Morgantown, WV 26505</p>
              <p>Mon-Sat: 7am-7pm</p>
              <p>Sun: 7am-5pm</p>
            </div>
            <div className={styles.footerColumn}>
              <h3>Connect</h3>
              <p>hello@noblecafe.com</p>
              <p>(304) 228-1404</p>
              <div className={styles.socialIcons}>
                {/* Social media icons will be added here */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Noble Cafe & Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;