import Title from '../../shared/Title';
import { Apple, Dropbox } from 'iconsax-react';

export default function Experience() {
  const exp = [
    {
      company: 'Apple',
      position: 'Product Designer',
      date: '2021 - Present',
    },
    {
      company: 'Amazon',
      position: 'Product Designer',
      date: '2020 - 2021',
    },
    {
      company: 'Airbnb',
      position: 'Product Designer',
      date: '2019 - 2020',
    },
    {
      company: 'Dropbox',
      position: 'Product Designer',
      date: '2016 - 2019',
    },
  ];
  return (
    <section className='w-full max-w-[944px] flex items-center justify-center border-gray-100 dark:border-gray-900 border-b-2 pb-12 pt-12'>
      <div className='px-4 flex-col items-center justify-center  w-full'>
        <Title title='Experience' />
        <div className='pt-4  w-full flex flex-wrap '>
          {exp.map((item, i) => (
            <div className='flex w-1/2 '>
              <div className=' w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center'>
                {item.company === 'Apple' && (
                  <Apple size='38' color='#BF125D' variant='Bold' />
                )}
                {/* {item.company === 'Airbnb' && (
                  <Airbnb size='38' color='#BF125D' variant='Bold' />
                )} */}
                {item.company === 'Dropbox' && (
                  <Dropbox size='38' color='#BF125D' variant='Bold' />
                )}
              </div>
              <div className='pl-8 pb-8 pt-4'>
                <h1 className='font-bold'>{item.company}</h1>
                <h3 className='text-gray-500'>
                  {item.position + '. ' + item.date}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
