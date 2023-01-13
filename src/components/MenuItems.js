import React, {memo} from 'react';
import { AiOutlineSearch } from "react-icons/ai";

import home from "../images/home.png";
import dashboard from "../images/dashboard.png";
// import projects from "../images/projects.png";
// import tasks from "../images/tasks.png";
// import flag from "../images/flag.png";
// import users from "../images/users.png";
// import support from "../images/support.png";
// import settings from "../images/settings.png";
import user from "../images/user.png";
import enter from "../images/enter.png";
import {navLinks} from "../store/data";
import Item from './Item';
import avatar1 from '../images/avatar1.png';


function MenuItems({navBar}) {
  return (
    <div className={`md:block md:static md:top-20 md:left:0 absolute w-fit pb-4 top-18 right-0 bg-white rounded-lg text-slate-900 ${navBar ? "block" : "hidden"}`}>
        <div className="ml-5 my-1">
            <div className="w-full mb-2 h-fit flex items-center rounded-md outline outline-slate-300 outline-1 focus:outline-none focus:ring focus:border-purple-900">
                <AiOutlineSearch size={30} color="gray" className="p-1"/>
                <input className="w-full h-full outline-none" type="search" placeholder="Search" name='search' />
            </div>

            <div className="flex items-center p-1 mr-5 hover:bg-purple-900 hover:text-white font-bold shadow-sm rounded hover:transition-all hover:duration-700 hover:ease-in">
                <img className='mr-2' src={home} width="20" height="20" alt="home" />
                <span>Home</span>
            </div>

            <div className="flex items-center p-1 hover:bg-purple-900 hover:text-white font-bold shadow-sm rounded hover:transition-all hover:duration-700 hover:ease-in">
                <div className="flex items-center mr-5">
                    <img className='mr-2' src={dashboard} width="20" height="20" alt="dashboard" />
                    <span>Dashboard</span>
                </div>
                <span className="ml-2 p-1 bg-white text-black font-bold shadow-sm rounded-full">10</span>
            </div>

            {
                navLinks.map(navLink => <Item key={navLink.id} navLink={navLink}/>)
            }
        </div>

        <div className="hidden md:block w-full m-2">
            <p className="font-bold">New featues available!</p>
            <p>Check out the new dashboard view. Pages now load faster.</p>
            <img src={user} className="w-full h-30 p-4 bg-slate-100" alt="features" />
            <br />
            <div>
                <button onPress={()=> null} className="mx-2 hover:font-bold hover:text-green-600">Dismiss</button>
                <button onPress={()=> null} className="text-purple-700 hover:font-bold hover:text-green-600">What's new?</button>
            </div>
        </div>
        <div className='hidden w-auto p-2 md:flex justify-between items-center overflow-x-auto'>
            <img src={avatar1} className="w-10 h-10 mr-2 rounded-full" alt="features" />
            <div className='mr-2'>
                <p>Olivia Rhyle</p>
                <p>olivia@untitledui.com</p>
            </div>
            <img src={enter} className="w-5 h-4" alt="features" />
        </div>
    </div>
  )
}

export default memo(MenuItems);