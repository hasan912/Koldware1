'use client'
import { Label } from './ui/label';
import { Button } from './ui/button';

import { motion } from 'framer-motion';
import { FadeIn } from '../../variants';


const SearchBox = () => {
    return (
        <motion.div
            variants={FadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full max-w-[788px] max-h-max flex flex-col  rounded-[20px] p-5">
            {/* input calender date picker */}
            <div className='md-[20px]'>
                {/* label */}
                <Label htmlFor='destination' className='text-5xl text-[#034EA2]'>
                    About KOLDWARE INDUSTRIES (PVT) LTD </Label>
                {/* input & icon  */}
                <div className='relative flex text-[#034EA2] text-2xl font-bold items-center mb-[20px]'>Discover Our Legacy and Vision</div>
                <div className='relative flex text-white font-semibold items-center mb-[20px]'>
                    <p>Founded by Mr. Hamid Ali in 1986, KOLDWARE INDUSTRIES (PVT) LTD has evolved into a leading entity in Pakistan's Cold Chain industry. From its humble beginnings in Karachi, the company has achieved significant milestones, shaping the landscape of refrigeration and cold storage solutions nationwide.</p>
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
