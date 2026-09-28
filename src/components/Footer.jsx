import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-8 border z-10 border-t-[#33353F] 
    border-l-transparent border-r-transparent text-white'>
        <div className='container p-4 md:p-12 flex justify-between
        flex flex-col md:flex-row items-center gap-4 md:gap-0'>
            <div className='text-white text-2xl md:text-3xl font-black cursor-pointer'>
               PORTFOLIO<span className='text-primary'>.</span>
            </div>
            <p className='text-slate text-sm md:text-base'>
               GUIDED BY: Er.Chandan Kumar Sahoo
            </p>
        </div>
    </footer>
  );
};

export default Footer;