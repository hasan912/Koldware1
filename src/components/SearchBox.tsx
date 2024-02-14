'use client'
import { Label } from './ui/label';
import { Button } from './ui/button';

import { motion } from 'framer-motion';
import { FadeIn } from '../../variants';


const SearchBox = () => {
  return (
    <motion.div
    variants={FadeIn('up',0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0}}
    className="w-full max-w-[788px] max-h-max flex flex-col  rounded-[20px] p-5">
      {/* input calender date picker */}
      <div className='md-[20px]'>
        {/* label */}
        <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>Welcome to KOLDWARE </Label>
        {/* input & icon  */}
        <div className='relative flex text-white font-semibold items-center mb-[20px]'>
          <p>KOLDWARE INDUSTRIES (Pvt) Ltd., established in 1986, is a leading manufacturer in Pakistan's HVACR industry. Specializing in Cold Stores, Reefer truck/trailer/van bodies, and associated products, they offer solutions like Polyurethane Insulated Sandwich Panels, Cold Store Doors, and Humidifiers. They are the exclusive distributors for renowned international brands like Van Amerongen CA Technology B.V., Greefa, Alfa Laval Spa, Ruukki Romania S.r.l., and Infraca s.l. Their expertise lies in providing quality perishable and temperature-sensitive commodities to local and international markets.</p>
        </div>
        {/* date picker */}
      </div>
      {/* slect, checkbox, btn */}
      <div className=''>
        {/* btn */}
        <Button size='default' className='px-5 py-5 bg-soft_green text-white hover:bg-soft_green-secondary hover:text-black'>Explore More</Button>
      </div>

    </motion.div>
  );
}

export default SearchBox;
