import Title from '../../shared/Title';

import { ArrowUpRight } from 'tabler-icons-react';

export default function Portfolio() {
  const projects = [
    {
        title: 'UI Design',
        src : 'https://cdn.dribbble.com/userupload/3779563/file/original-4b7012cc1f255cf227a64ffb4d3c53b0.png?compress=1&resize=752x'
    },
    {
        title: 'UI Design',
        src : 'https://cdn.dribbble.com/userupload/3758434/file/original-87b386e3d2eeedaa1b7fe8ac0c8010c9.png?compress=1&resize=2048x1536'
    },
    {
        title: 'UI Design',
        src : 'https://cdn.dribbble.com/userupload/3641152/file/original-041447ef68f19f2dbd18f83f93c6081f.png?compress=1&resize=752x'
    },
    {
        title: 'UI Design',
        src : 'https://cdn.dribbble.com/userupload/3356847/file/original-1bb2368aefc3ca2906ca70259dc4775d.jpg?compress=1&resize=1504x1128'
    },
    {
        title: 'UI Design',
        src : 'https://cdn.dribbble.com/userupload/3810776/file/original-2a8742b53c412df673c49a7d6c6332e3.png?compress=1&resize=752x'
    },
    {
        title: 'UI Design',
        src : 'https://cdn.dribbble.com/userupload/3788894/file/original-14f6b40579e8fab8049360abd33524f7.webp?compress=1&resize=752x'
    },
   
  ];
  return (
    <section className='w-full max-w-[944px] flex items-center justify-center border-gray-100 dark:border-gray-900 border-b-2 pb-12 pt-12'>
      <div className='px-4 sm: px-0 flex-col items-center justify-center  w-full'>
       <div className ="w-full flex justify-between">
       <Title title='Portfolio' />
       <div className="flex">
        <span className="text-xl font-medium pr-2">See All</span>
       <ArrowUpRight
        size={28}
        strokeWidth={2}
        color={'white'}
      />
  </div>
       </div>
        <div className='pt-4  w-full flex flex-wrap justify-between'>
          {projects.slice(0, 6).map((item, i) => (
            <div className='w-[32%] h-[226px]   my-2 border-gray-300 dark:border-gray-900 border-2 rounded-lg flex items-center justify-center cursor-pointer relative overflow-hidden  transform hover:scale-150 transition duration-500 ease-in-out hover:z-50'>
                <img src ={item.src}  className="absoolute left-0 right-0 top-0 bottom-0 opacity-50 backdrop-blur-sm hover:opacity-100"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
