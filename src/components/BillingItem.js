import { memo } from "react"
import download from "../images/download.png";

const BillingItem = ({data}) => {
    return(
        <tr className="w-full h-20 bg-white hover:text-purple-50 hover:bg-purple-900 hover:font-bold hover:transition-all hover:duration-300 hover:ease-in">
            <td className="px-5"><input type="checkbox" name="history" /></td>
            <td>{data.invoice}</td>
            <td>USD{data.amount}.00</td>
            <td className="w-32 md:block hidden">{data.date}</td>
            <td><img src={data.status} alt="download" className="md:block hidden w-50 h-7 shadow rounded-md" /></td>
            <td className="w-32 h-6 md:flex hidden relative">
                {data.usersOnPlan.map(
                    (img) => <img key={img.id} className={`absolute md:top-5 md:left-0 ml-${img.id} w-5 h-5`} src={img.image} alt="profile"/>)
                }
                <span className="bg-white rounded-xl shadow">+2</span>
            </td>
            <td className="md:block hidden"><img src={download} alt="download" className="w-8 h-8" /></td>
        </tr>
    )
}

export default memo(BillingItem);