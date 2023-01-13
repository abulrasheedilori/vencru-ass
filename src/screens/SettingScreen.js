import React, {useState} from "react";
import { HiOutlineMenuAlt1, HiMail, HiPlus,  } from "react-icons/hi";
import {GrClose} from "react-icons/gr";
import CreditCard from "../components/CreditCard";
import logo from "../images/Logomark.png";
import download from "../images/download.png";
import { links, billings, cards } from "../store/data";
import BillingItem from "../components/BillingItem";
import MenuItems from "../components/MenuItems";

export const SettingScreen = () => {
  const [navBar, setNavBar] = useState(false);

  return (
    <section>
      <div className="md:flex w-full h-full bg-slate-100">
        {/* Navigation menu */}
        <nav className="md:w-1/4 md:block md:h-full w-full h-30 flex justify-between bg-white shadow-lg p-5 items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-12 h-12 mr-5" />
            <h1 className="text-slate-900 font-bold text-2xl">Untitled UI</h1>
          </div>
          <div className=" relative">
            <button 
              className="p-2 text-slate-700 rounded-md md:hidden outline-none focus:border-slate-400 transition-all"
              onClick={() => setNavBar(!navBar)}
            >
              {navBar? (
                <GrClose size={30} color ="slate-900"/>
                ) : (
                <HiOutlineMenuAlt1 size={30} color ="slate-900"/>
                )
              }
            </button>
            <MenuItems navBar={navBar}/>
          </div>
        </nav>
        
        {/* body */}
        <div className="md:w-3/4 plx-5">
          {/* Settings */}
          <div className="m-5">
            <h1 className="text-slate-900 font-bold text-2xl">Settings</h1>
            <p className="text-slate-600">Manage your team and preferences here</p>
          </div>
          {/* Links My Details */}
          <ul className="w-fit mx-4 border-2 border-slate-300 flex px-5 items-center justify-start rounded-lg scroll-smooth transition-all duration-300 ease-in overflow-auto">
            {links.map((link) => (
              <li
                key={link.id}
                className="shrink-0 border-r-2 py-2 px-4 text-[14px] hover:bg-purple-700 hover:text-white transition-all duration-300 ease-in"
              >
                {link.title}
              </li>
            ))}
          </ul>
          {/* Payment column */}
          <div className="m-5">
            <h2 className="font-bold text-1xl">Payment Method</h2>
            <p className="text-slate-600">
              Update your billing details and addresses.
            </p>
          </div>
          {/* Contact email */}
          <div className="md:flex md:justify-between md:m-5 m-5">
            <div className="md:w-1/3">
              <p className="text-slate-600 font-bold text-1xl">Contact email</p>
              <span className="text-slate-600">Where should invoices be sent?</span>
            </div>
            <div className="md:w-2/3 p-1">
              <div className="my-5">
                <div>
                  <input className="bg-purple-700" type="radio" name="email" /> <span className="text-slate-600 font-bold">Send to my email</span>
                </div>
                <p className="ml-5 text-slate-600">olivia@untitledui.com</p>
              </div>
              <div>
                <div>
                  <input type="radio" name="email" /> <span className="text-slate-600 font-bold">Send to an alternative email</span>
                </div>
                <div className="md:w-fit flex items-center bg-white border-grey border-2 text-slate-600 px-4 py-2 mx-4 rounded-md shadow-md">
                  <HiMail size={30} className="mr-2"/>
                  <p>billing@untitledui.com</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
          {/* Card details */}
          <div className="md:flex md:justify-between md:m-5 m-5">
            <div className="md:w-1/3 my-5">
              <p className="text-slate-600 font-bold">Card details</p>
              <span>Select default payment method</span>
            </div>
            <div className="md:w-2/3">
                <CreditCard card = {cards[0]}/>
                <CreditCard card = {cards[1]}/>
              <div className="w-fit flex hover:p-2 my-5 items-center hover hover:border-2">
                <HiPlus size={20} className="mr-5"/>
                <span className="text-slate-600">Add new payment method</span></div>
              </div>
            </div>

            <div>
          {/* Billing History */}
          <div className="m-5">
              <h2 className="text-slate-900 text-2xl font-bold">Billing history</h2>
              <div>
                <div className="flex my-5 w-fit bg-white py-1 px-3 shadow border-slate-200">
                  <img src={download} alt="download" width={30} height={30}/>
                  <span className="ml-2">Download all</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full my-5 m-auto shadow-md border-2 round-sm">
                  <thead>
                    <tr className="w-full border-2 text-left">
                      <th className="p-2"><input type="checkbox" className="bg-purple-700" name="history" /></th>
                      <th className="p-2 whitespace-nowrap">Invoice</th>
                      <th className="p-2 whitespace-nowrap">Amount</th>
                      <th className="p-2 whitespace-nowrap hidden md:table-cell">Date</th>
                      <th className="p-2 hidden md:table-cell">Status</th>
                      <th className="p-2 whitespace-nowrap hidden md:table-cell">Users on plan</th>
                      <th className="p-2 hidden md:table-cell ">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billings.map( billing =>
                      <BillingItem key={billing.id} data={billing}/>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>    
      </div>  
    </section>
  );
};

export default SettingScreen;
