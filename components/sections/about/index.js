import Title from '../../shared/Title';

export default function About() {
  return (
    <section className='max-w-[944px] flex items-center justify-center border-gray-300 border-b-2 pb-12 pt-12'>
      <div className='px-4 flex-col items-center justify-center '>
        <Title title='About' />
        <p className='pt-2 flex-col'>
          <span>
            I'm Onur, I live in Istanbul. I am a digital product designer at
            Apple. I’m a multidisciplinary designer with 6+ years of combined
            experience in UI/UX, research, branding, graphic design, digital
            products with empathy, curiosity and attention to detail.
          </span>
          <br />
          <span>
            I am passionate about design tools and love making micro-animations
            and creating interactive components.
          </span>
        </p>
      </div>
    </section>
  );
}
