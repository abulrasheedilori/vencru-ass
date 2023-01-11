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


function MenuItems(props) {
  return (
    <div className={`md:block sm:absolute top-0 right-0 bg-white text-slate-900 flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${props.navBar ? "block" : "hidden"}`}>
        <div className="ml-5 my-1">
            <div>
                <AiOutlineSearch size={30} />
                <input type="search" name='search' />
            </div>
            <div>
                <img src={home} width="20" height="20" alt="home" />
                <span>Home</span>
            </div>
            <div>
                <div>
                    <img src={dashboard} width="20" height="20" alt="dashboard" />
                    <span>Dashboard</span>
                </div>
                <span>10</span>
            </div>
            {
                navLinks.map(navLink => <Item key={navLink.id} navLink={navLink}/>)
            }
        </div>
        <div>
            <p>New featues available!</p>
            <p>Check out the new dashboard view. Pages now load faster.</p>
            <img src={user} width="100" height="40" alt="features" />
            <br />
            <div>
                <span>Dismiss</span>
                <span>What's new?</span></div>
        </div>
        <div className='flex justify-between items-around'>
            <img src={avatar1} width="12" height="12" className="rounded-xl" alt="features" />
            <div>
                <p>Olivia Rhyle</p>
                <p>olivia@untitledui.com</p>
            </div>
            <img src={enter} width="12" height="12" alt="features" />
        </div>
    </div>
  )
}

export default memo(MenuItems);