import Title from '../../shared/Title';

export default function Portfolio() {
  const exp = [
    'UI Design',
    'UX Design',
    'High Fidelity Wireframing',
    'Fidelity Wireframing',
    'Figma',
    'Prototyping',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe After Effects',
    'Motion Design',
    'Brand Design',
    'Adobe XD',
    'Sketch',
    'Web Design',
    'Leadership',
    'User Interviews',
  ];
  return (
    <section className='w-full max-w-[944px] flex items-center justify-center border-gray-300 border-b-2 pb-12 pt-12'>
      <div className='px-4 flex-col items-center justify-center  w-full'>
        <Title title='Portfolio' />
        <div className='pt-4  w-full flex flex-wrap justify-between'>
          {exp.slice(0, 6).map((item, i) => (
            <div className='w-[32%] h-[226px] my-2 border-gray-300 border-2 rounded-lg bg-pink-300 flex items-center justify-center cursor-pointer'>
              <h1 className='text-white-500'>{item}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}