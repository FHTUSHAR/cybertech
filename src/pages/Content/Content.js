import React from 'react';
import img from '../../images/Path 6.png'

const Content = () => {
    return (
        <div className='flex'>
            <div className='w-[25%] h-[587px] bg-[#9398BF] sm:hidden hidden lg:block'>
                <h3 className='font-[500] text-[18px] ml-[24px] mt-[24px] mb-[28px]'>Sidebar</h3>
                <div className='  ml-[24px] mb-[8px]'>
                    <select className=' w-[251px]  bg-[white] outline-none px-[4px] py-[4px]' name="" id="">
                        <option className='w-[206px] bg-[#B8B6B6]' value="">Item 1</option>
                        <option className='w-[206px] bg-[#B8B6B6]' value="">Item A</option>
                        <option className='w-[206px] bg-[#B8B6B6]' value="">Item B</option>

                    </select>
                </div>
                <div className='  ml-[24px] mb-[8px]'>
                    <select className=' w-[251px]  bg-[white] outline-none px-[4px] py-[4px]' name="" id="">
                        <option className='w-[206px] bg-[#B8B6B6]' value="">Item 2</option>
                        <option className='w-[206px] bg-[#B8B6B6]' value="">Item A</option>
                        <option className='w-[206px] bg-[#B8B6B6]' value="">Item B</option>

                    </select>
                </div>
                <div className='  ml-[24px]'>
                    <select className=' w-[251px]  bg-[white] outline-none px-[4px] py-[4px]' name="" id="">
                        <option className='w-[206px] bg-[#B8B6B6]' value="">Item 3</option>
                        <option className='w-[206px] bg-[#B8B6B6]' value="">Item A</option>
                        <option className='w-[206px] bg-[#B8B6B6]' value="">Item B</option>

                    </select>
                </div>
                <div>

                </div>
            </div>
            <div className='lg:w-[90%] '>
                <div >
                    <h1 className='text-[36px] font-[500] text-center mb-[16px] mt-[16px]'><span className=']'>Main Content</span></h1>
                    <div className='text-[16px] lg:mx-[100px] mx-[20px] text-left '>
                        <p className='mb-[28px]'>My country’s name is Bangladesh. Bangladesh is a very small country huge population. It is a medium-developed country in South Asia. We have a very good and progressing economy. It has an area of 147,570 square kilometers. But it has a population of 164 million. That is huge than the area.</p>

                        <p className='mb-[28px]'>But it is still a very beautiful and peaceful country. People of Bangladesh are so friendly with each other. This country has a glorious history of independence. We got independence from Pakistan in 1971 after nine mothers’ blood-shedding war. More than 3 million Bangladeshi sacrificed their life in that genocide.</p>

                        <p>But still, we were able to get our independence. After independence, the newly born country faced lots of hard times and struggles. But it rises very well. Now Bangladesh is one of the best countries to live in South Asia. There are so many beautiful spots to see in this country. </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Content;