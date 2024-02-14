'use client'
import CountUp from 'react-countup'

const statData=[
    {
        value:12,
        type:'Our Product',
    },
    {
        value:500,
        type:'Our Statisfied Client ',
        unit:'k'
    },
    {
        value:100,
        type:'Our Project',
        unit:'+'
    }
]

const Stats = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-x-8 gap-y-4 my-10'>
            {statData.map((item,index)=>{
                return <div key={index} className='flex'>
                    <div className='flex items-baseline gap-x-2'>
                        <h3 className='h3 text-soft_green'>
                            <CountUp start={0} end={item.value} duration={10} decimals={item.value % 1 !== 0 ? 1 : 0}/>
                            <span>{item.unit}</span>
                        </h3>
                        <div className='text-black font-semibold'>{item.type}</div>
                    </div>
                </div>
            })}
    </div>
  );
}

export default Stats;
