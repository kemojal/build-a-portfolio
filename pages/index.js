import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Hero from '/components/sections/hero';
import About from '../components/sections/about';
import Experience from '../components/sections/experience';
import Skills from '../components/sections/skills';
import Portfolio from '../components/sections/portfolio';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio/>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
