// File: pages/menu.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import styles from '../styles/Menu.module.css';

const Menu: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Menu | Noble Cafe & Bakery</title>
        <meta name="description" content="Explore our artisanal coffee, specialty drinks, and pastries at Noble Cafe & Bakery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.menuHero}>
          <h1>OUR MENU</h1>
          <p>Crafted with care, served with passion.</p>
        </section>

        <section className={styles.menuSection}>
          <h2>COFFEE</h2>
          <div className={styles.menuGrid}>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3>Drip Coffee</h3>
                <span className={styles.price}>$3.50</span>
              </div>
              <p>Our signature house blend, freshly brewed throughout the day.</p>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3>Cold Brew</h3>
                <span className={styles.price}>$4.75</span>
              </div>
              <p>Steeped for 18 hours for a smooth, rich flavor with low acidity.</p>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3>Americano</h3>
                <span className={styles.price}>$3.75</span>
              </div>
              <p>Espresso shots topped with hot water for a rich cup similar to coffee.</p>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3>Espresso</h3>
                <span className={styles.price}>$3.25</span>
              </div>
              <p>A concentrated shot of coffee served in a demitasse cup.</p>
            </div>
          </div>
        </section>

        <section className={styles.menuSection}>
          <h2>SPECIALTY DRINKS</h2>
          <div className={styles.menuGrid}>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3>Latte</h3>
                <span className={styles.price}>$5.25</span>
              </div>
              <p>Espresso balanced with steamed milk and a light layer of foam.</p>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3>Mocha</h3>
                <span className={styles.price}>$5.75</span>
              </div>
              <p>Espresso with steamed milk, chocolate, and a dollop of whipped cream.</p>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3>Chai Latte</h3>
                <span className={styles.price}>$5.50</span>
              </div>
              <p>Black tea infused with spices, steamed milk, and a touch of honey.</p>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3>Matcha Latte</h3>
                <span className={styles.price}>$5.75</span>
              </div>
              <p>Ceremonial grade matcha whisked with steamed milk.</p>
            </div>
          </div>
        </section>

        <section className={styles.menuSection}>
          <h2>MILK OPTIONS</h2>
          <div className={styles.optionsGrid}>
            <div className={styles.optionItem}>
              <h3>Whole Milk</h3>
              <p>Included</p>
            </div>
            <div className={styles.optionItem}>
              <h3>Almond Milk</h3>
              <p>+$0.75</p>
            </div>
            <div className={styles.optionItem}>
              <h3>Oat Milk</h3>
              <p>+$0.75</p>
            </div>
            <div className={styles.optionItem}>
              <h3>Macadamia Milk</h3>
              <p>+$1.00</p>
            </div>
          </div>
        </section>

        <section className={styles.menuSection}>
          <h2>SYRUPS</h2>
          <div className={styles.optionsGrid}>
            <div className={styles.optionItem}>
              <h3>Vanilla</h3>
              <p>+$0.50</p>
            </div>
            <div className={styles.optionItem}>
              <h3>Hazelnut</h3>
              <p>+$0.50</p>
            </div>
            <div className={styles.optionItem}>
              <h3>Caramel</h3>
              <p>+$0.50</p>
            </div>
            <div className={styles.optionItem}>
              <h3>Raspberry</h3>
              <p>+$0.50</p>
            </div>
          </div>
        </section>

        <section className={styles.menuSection}>
          <h2>SEASONAL SPECIALS</h2>
          <div className={styles.specialsGrid}>
            <div className={styles.specialItem}>
              <div className={styles.specialHeader}>
                <h3>Raspberry Matcha Dream</h3>
                <span className={styles.price}>$6.50</span>
              </div>
              <p>Our signature matcha latte infused with house-made raspberry syrup and topped with raspberry dust.</p>
            </div>
            <div className={styles.specialItem}>
              <div className={styles.specialHeader}>
                <h3>Honduras Caramel Hazelnut Brew</h3>
                <span className={styles.price}>$6.75</span>
              </div>
              <p>Single-origin Honduras beans brewed to perfection with notes of caramel and hazelnut.</p>
            </div>
            <div className={styles.specialItem}>
              <div className={styles.specialHeader}>
                <h3>Ecuador Mocha Experience</h3>
                <span className={styles.price}>$7.25</span>
              </div>
              <p>Ecuadorian single-origin espresso with rich chocolate ganache and velvety steamed milk.</p>
            </div>
          </div>
        </section>

        <section className={styles.menuFooter}>
          <p>We source our beans ethically and roast them in small batches to ensure the freshest flavor.</p>
          <p>Please inform our baristas of any allergies or dietary restrictions.</p>
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
              <p>123 Art District</p>
              <p>Cityname, ST 12345</p>
              <p>Mon-Fri: 7am-7pm</p>
              <p>Sat-Sun: 8am-8pm</p>
            </div>
            <div className={styles.footerColumn}>
              <h3>Connect</h3>
              <p>hello@noblecafe.com</p>
              <p>(555) 123-4567</p>
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

export default Menu;