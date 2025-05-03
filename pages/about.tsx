// File: pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import styles from '../styles/About.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us | Noble Cafe & Bakery</title>
        <meta name="description" content="Learn about Noble Cafe & Bakery, a women-owned business passionate about coffee, art, and community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.aboutHero}>
          <h1>OUR STORY</h1>
          <p>Brewing excellence, crafting community.</p>
        </section>

        <section className={styles.aboutContent}>
          <div className={styles.storyImage}>
            <img src="/founder.jpg" alt="Noble Cafe owners" />
          </div>
          <div className={styles.storyText}>
            <h2>Women-Owned, Passion-Driven</h2>
            <p>
              Noble Cafe & Bakery was born from a deep love for the art of coffee and a desire to create a space where people could slow down and connect. Founded in 2021 by sisters Emma and Sarah Mitchell, our cafe stands as a testament to the belief that coffee is more than just a beverage—it's an expression of art, culture, and community.
            </p>
            <p>
              As a proudly women-owned business, we bring a unique perspective to the coffee industry, emphasizing inclusivity, sustainability, and creativity in everything we do. Our journey began after years of experience in specialty coffee shops across the country, where we honed our craft and developed our vision for a cafe that would honor the artistry behind every cup.
            </p>
          </div>
        </section>

        <section className={styles.missionSection}>
          <div className={styles.missionContent}>
            <h2>Our Philosophy</h2>
            <p>
              At Noble Cafe & Bakery, we believe in the transformative power of a thoughtfully crafted cup of coffee. We see coffee as a canvas—a medium through which we express our commitment to quality, sustainability, and community.
            </p>
            <p>
              Each cup we serve represents a journey—from the farmers who cultivate the beans with care, to our roasters who bring out their unique characteristics, to our baristas who transform them into works of art. We honor this journey by approaching our craft with reverence, precision, and creativity.
            </p>
            <p>
              Beyond coffee, we're committed to creating a space that nurtures connection. Our cafe is designed as a sanctuary from the rush of everyday life—a place where conversations flow, ideas spark, and community thrives.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Quality</h3>
              <p>We source the finest beans and ingredients, never compromising on excellence.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Artistry</h3>
              <p>We approach coffee as an art form, expressing creativity in every cup we serve.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Sustainability</h3>
              <p>We make choices that respect our planet and support ethical farming practices.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Community</h3>
              <p>We foster connections and create a welcoming space for everyone.</p>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <h2>Our Craft</h2>
          <div className={styles.processContent}>
            <div className={styles.processText}>
              <p>
                Coffee is our medium, and the cafe is our gallery. We approach each aspect of our business with an artist's eye—from the carefully curated interiors to the precise pour of espresso, to the delicate swirl of latte art.
              </p>
              <p>
                Our baristas are trained not just in the technical aspects of coffee preparation, but in understanding coffee as a form of expression. They study the nuances of flavor, the science of extraction, and the artistry of presentation. Every cup they create tells a story—of origin, process, and passion.
              </p>
              <p>
                We extend this artistry to our bakery items as well. Our pastries and bread are crafted in-house using traditional methods and the finest ingredients, creating perfect companions to our coffee offerings.
              </p>
            </div>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <h3>Source</h3>
                <p>We partner with ethical farms and importers who share our values.</p>
              </div>
              <div className={styles.processStep}>
                <h3>Roast</h3>
                <p>We work with local roasters who bring out the unique character of each bean.</p>
              </div>
              <div className={styles.processStep}>
                <h3>Prepare</h3>
                <p>Our baristas apply precision and creativity to craft the perfect cup.</p>
              </div>
              <div className={styles.processStep}>
                <h3>Serve</h3>
                <p>We present each drink as a work of art, meant to be savored and enjoyed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <h2>Meet Our Team</h2>
          <p className={styles.teamIntro}>
            The heart and soul of Noble Cafe & Bakery is our dedicated team of coffee enthusiasts, artists, and community builders.
          </p>
          <div className={styles.founderProfiles}>
            <div className={styles.founderProfile}>
              <div className={styles.founderImage}>
                <img src="/founder1.jpg" alt="Chris Henry" />
              </div>
              <h3>Chris Henry</h3>
              <p>Web Designer</p>
              <p>
                 Founder info would go here :
              </p>
            </div>
            <div className={styles.founderProfile}>
              <div className={styles.founderImage}>
                <img src="/founder2.jpg" alt="chris henry" />
              </div>
              <h3>Chris Henry</h3>
              <p>Web Designer</p>
              <p>
                Co founder info would go here :
              </p>
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

export default About;