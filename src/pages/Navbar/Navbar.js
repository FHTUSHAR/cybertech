import React from 'react';
import img1 from '../../images/Frame.png'
import img2 from '../../images/Frame 24.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[black] text-[white]">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <div className='flex'>
                                <p className='text-[white] z-1'>Menu</p>
                                <img className='w-[12px] h-[12px] mt-[1px] ml-[4px]' src={img1} alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content left-[100%] mt-[-65px] w-[285px] h-[720px]  z-[1] p-2 shadow bg-[#ADADAD]  text-center  ">
                            <li className='mx-auto mt-[100px] mb-[20px] font-[500] text-[black]'><a>Home</a></li>
                            <li className='mx-auto font-[500] mb-[20px] text-[black]'><a>About</a></li>
                            <li className='mx-auto font-[500] mb-[20px] text-[black]'><a>Blog</a></li>
                            <li className='mx-auto font-[500] text-[black]'><a>Contact</a></li>

                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[white]">
                        <li className='px-[30px]'>Home</li>
                        <li className='px-[30px]'>About</li>
                        <li className='px-[30px]'>Blog</li>
                        <li className='px-[30px]'>Contact</li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="navbar-start">
                        <div className="dropdown ">
                            <label tabIndex={1} className="btn btn-ghost lg:hidden">
                                <div className='flex'>
                                    <p className='text-[white] mt-[5px] z-1'>Sidebar</p>
                                    <img className='w-[24px] h-[24px] mt-[1px] ml-[4px]' src={img2} alt="" />
                                </div>
                            </label>

                            <div tabIndex={1} className=" menu menu-sm dropdown-content right-[100%] mt-[-65px] w-[285px] h-[720px]  z-[1] p-2 shadow bg-[#9398BF]  text-center  ">

                                <div className='text-[black] h-[587px] bg-[#9398BF] '>
                                    <h3 className='font-[500] text-[18px] ml-[24px] mt-[50px] mb-[28px]'>Sidebar</h3>
                                    <div className='  ml-[24px] mb-[8px]'>
                                        <select className=' w-[200px]  bg-[white] outline-none px-[4px] py-[4px]' name="" id="">
                                            <option className='w-[206px] bg-[#B8B6B6]' value="">Item 1</option>
                                            <option className='w-[206px] bg-[#B8B6B6]' value="">Item A</option>
                                            <option className='w-[206px] bg-[#B8B6B6]' value="">Item B</option>

                                        </select>
                                    </div>
                                    <div className='  ml-[24px] mb-[8px]'>
                                        <select className=' w-[200px]  bg-[white] outline-none px-[4px] py-[4px]' name="" id="">
                                            <option className='w-[206px] bg-[#B8B6B6]' value="">Item 2</option>
                                            <option className='w-[206px] bg-[#B8B6B6]' value="">Item A</option>
                                            <option className='w-[206px] bg-[#B8B6B6]' value="">Item B</option>

                                        </select>
                                    </div>
                                    <div className='  ml-[24px]'>
                                        <select className=' w-[200px]  bg-[white] outline-none px-[4px] py-[4px]' name="" id="">
                                            <option className='w-[206px] bg-[#B8B6B6]' value="">Item 3</option>
                                            <option className='w-[206px] bg-[#B8B6B6]' value="">Item A</option>
                                            <option className='w-[206px] bg-[#B8B6B6]' value="">Item B</option>

                                        </select>
                                    </div>
                                    <div>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navbar;