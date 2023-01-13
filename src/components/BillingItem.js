import { memo } from "react"
import download from "../images/download.png";

import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";
import avatar5 from "../images/avatar5.png";


const BillingItem = ({ data }) => {
    return (
        <tr className="w-full text-slate-600 border-2 bg-white hover:text-purple-50 hover:bg-purple-600 hover:transition-all hover:duration-300 hover:ease-in">
            <td className="p-2"><input type="checkbox" name="history" /></td>
            <td className="p-2 text-[14px] whitespace-nowrap md:text-base">{data.invoice}</td>
            <td className="p-2">USD{data.amount}.00</td>
            <td className="hidden md:table-cell ">{data.date}</td>
            <td className="p-2 hidden md:table-cell"><img src={data.status} alt="download" className=" w-50 h-7 shadow rounded-md" /></td>
            <td className="p-2 hidden md:table-cell">
                <div className="relative -top-2">
                    <img className={`w-5 h-5 absolute right-[2rem]`} src={avatar1} alt="profile" />
                    <img className={`w-5 h-5 absolute right-[2.5rem]`} src={avatar2} alt="profile" />
                    <img className={`w-5 h-5 absolute right-[3rem]`} src={avatar3} alt="profile" />
                    <img className={`w-5 h-5 absolute right-[3.5rem]`} src={avatar4} alt="profile" />
                    <img className={`w-5 h-5 absolute right-[4rem]`} src={avatar5} alt="profile" />
                    <span className="bg-white rounded-full shadow absolute right-[1.5rem]">+2</span>
                </div>
            </td>
            <td className="p-2 hidden md:table-cell"><img src={download} alt="download" className="w-8 h-8" /></td>
        </tr>
    )
}

export default memo(BillingItem);