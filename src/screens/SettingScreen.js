import React from "react";
import { HiOutlineMenuAlt1, HiMail, HiPlus } from "react-icons/hi";
// import CreditCard from "../components/CreditCard";
import logo from "../images/Logomark.png";
import download from "../images/download.png";
import { links } from "../store/data";

export const SettingScreen = () => {
  return (
    <section className="w-full h-full bg-slate-100">
      <nav className="flex justify-between bg-white shadow-lg p-5 items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20 mr-5" />
          <h1 className="text-slate-900 font-semi-bold text-2xl">Untitled UI</h1>
        </div>
        <HiOutlineMenuAlt1 size={50} />
      </nav>

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
            {/* <div>
              {
              cards.map(
                (card) => (<CreditCard key={card.id} card = {{...card}}/>))
              }
            </div> */}
            {
                <div className="flex justify-around">
                  <img src={logo} alt="Visa logo" width={50} height={20}/>
                  <div>
                      <p>Visa ending in {}</p>
                      <p>Expiry </p>
                      <div><span>Set as default</span><span>Edit</span></div>
                  </div> 
                  <img src={logo} width={50} height={50} alt="Marked" />
                </div>
            }
            <div className="flex mr-2 my-5"><HiPlus size={15} /><span>Add new payment method</span></div>
          </div>
        </form>
        <h2>Billing history</h2>
        <div>
          <span className="flex my-5 w-fit bg-white py-1 px-3 shadow border-slate-200">
            <img src={download} alt="download" width={30} height={30}/>
            <span className="ml-2 ">Download all</span>
          </span>
        </div>
      </div>

      <div>
        <div>
        </div>
      </div>
    </section>
  );
};

export default SettingScreen;
