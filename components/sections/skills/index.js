import Title from '../../shared/Title';

export default function Skills() {
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
        <Title title='Skills' />
        <div className='pt-4  w-full flex flex-wrap'>
          {exp.map((item, i) => (
            <div className='px-4 py-1 m-1 my-1 border-gray-300 border-2 rounded-md bg-gray-100'>
              <h1 className='text-gray-500'>{item}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
