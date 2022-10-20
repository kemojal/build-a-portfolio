import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Hero from '/components/sections/hero';
import About from '../components/sections/about';
import Experience from '../components/sections/experience';
import Skills from '../components/sections/skills';
import Portfolio from '../components/sections/portfolio';
import Contact from '../components/sections/contact';
import { FooterItem } from '../components/FooterItem';
export default function Home() {
  const footerData = [
    {
      title: 'Dribble',
      href: '',
      icon: 'dribble',

    },
    {
      title: 'Behance',
      href: '',
      icon: 'behance',

    },
    {
      title: 'LinkedIn',
      href: '',
      icon: 'linkedin',

    },
    {
      title: 'Twitter',
      href: '',
      icon: 'twitter',

    }
  ]
  return (
    <div className='container sm:px-0 bg-white dark:bg-black text-stone-900 dark:text-slate-50'>
      <Head>
        <title>Porfolio</title>
      </Head>

      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <footer className='w-full flex items-center justify-center border-b-2 pb-12 pt-0'>
        <div className='max-w-[50%] px-4 flex items-center justify-between  w-full '>
          {
            footerData.map(
              (item, i)=>(
                <FooterItem key={i} href={item.href} title={item.title} />
              )
            )
          }
          {/* <a href='https://next.new' target='_blank' rel='noopener noreferrer'>
            Dribble
          </a>
          <a href='https://next.new' target='_blank' rel='noopener noreferrer'>
            Behance
          </a>
          <a href='https://next.new' target='_blank' rel='noopener noreferrer'>
            LinkedIn
          </a>
          <a href='https://next.new' target='_blank' rel='noopener noreferrer'>
            Twitter
          </a> */}
        </div>
      </footer>
    </div>
  );
}
