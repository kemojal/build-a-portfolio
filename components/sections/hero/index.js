export default function Hero() {
  return (
    <section
      className='
    w-full max-w-[944px] flex items-center border-gray-300 border-b-2 pb-12'
    >
      <div className='flex items-center'>
        <div className='w-[156px] h-[156px] bg-gray-300 rounded-full flex justify-center items-center border-2 border-gray-300'>
          P
        </div>
        <div className='px-12 items-center'>
          <div>
            <h1 className='text-4xl font-semibold'>Onur Gür</h1>
            <h2 className='text-2xl font-semibold text-neutral-500'>
              Digital Product Designer
            </h2>
          </div>
          <div>
            I’m a product designer at Apple. I specialize in UI/UX Design,
            Responsive Web Design, and Brand Design.
          </div>
        </div>
      </div>
    </section>
  );
}
