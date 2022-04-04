import React from 'react';
import topImg from '../../images/top-img.jpg';

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap container mx-auto">
           <div className="basis-1/2 mx-3 md:mx-0">
               <h1 className='text-4xl md:text-6xl mb-6 mt-10'>Just shoppers helping shoppers</h1>
               <p className='mb-6'>Join the world’s biggest e-community of shoppers where you’ll find out all you need to know to buy better and can share all you know to help others do the same. Product experiences and uncensored conversations.</p>
               <button className='border border-sky-500 p-3 mb-3'>Learn more</button>
           </div>
           <div className="basis-1/2">
               <img src={topImg} alt="" />
           </div>
        </div>
    );
};

export default Header;