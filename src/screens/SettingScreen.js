import React from "react";
import { HiOutlineMenuAlt1, HiMail } from "react-icons/hi";
import logo from "../images/Logomark.png";
import { links } from "../store/data";

export const SettingScreen = () => {
  return (
    <section className="w-screen h-screen bg-slate-100">
      <nav className="flex justify-between bg-white shadow-lg p-5 items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20 mr-5" />
          <h1 className="font-bold text-4xl">Untitled UI</h1>
        </div>
        <HiOutlineMenuAlt1 size={50} />
      </nav>

      {/* Settings subtitle */}
      <div className="m-5">
        <h1 className="font-bold text-2xl">Settings</h1>
        <p className="text-slate-600">Manage your team and preferences here</p>
      </div>

      <ul className="w-full flex px-5 items-center justify-start rounded-md overflow-auto">
        {links.map((link) => (
          <li
            key={link.id}
            className="shrink-0 py-3 px-5 text-1xl border-2  hover hover:bg-purple-700  hover:text-white shadow"
          >
            {link.title}
          </li>
        ))}
      </ul>

      <div className="m-5">
        <h2 className="font-bold text-1xl">Payment Method</h2>
        <p className="text-slate-600">
          Update your billing details and addresses.
        </p>
      </div>

      <div className="m-5">
        <div>
          <p>Contact email</p>
          <span>Where should invoices be sent?</span>
        </div>
        <form>
          <div>
            <div>
              <input type="radio" name="email" /> <span>Send to my email</span>
            </div>
            <p>olivia@untitledui.com</p>
          </div>
          <div>
            <div>
              <input type="radio" name="email" /> <span>Send to my email</span>
            </div>
            <div className="flex items-center p-2 my-2 mx-6 rounded-sm shadow-md">
              <HiMail size={20} />
              olivia@untitledui.com
            </div>
          </div>
          <div>
            <div>
              <p>Card details</p>
              <span>Select default payment method</span>
            </div>
            <div>
              
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SettingScreen;
