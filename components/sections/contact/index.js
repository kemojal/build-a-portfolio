import Title from '../../shared/Title';

export default function Contact() {
  return (
    <section className='max-w-[944px] flex-col items-center justify-center pb-12 pt-12'>
      <div className='px-4 flex-col items-center justify-center text-center'>
        <Title title={`Let's create awesome products!`} />
              <p className='pt-2 pb-4 flex-col text-gray-500 text-lg'>
                  I am always open to discuss your project, improve your online presence or help with your UX/UI design challenges.
            </p>
        <a href="#" class="p-3 px-6 pt-2 text-white  rounded-full  bg-pink-600 mt-4 hover:bg-pink-900">
            Say Hello
            </a>
      </div>
    </section>
  );
}
