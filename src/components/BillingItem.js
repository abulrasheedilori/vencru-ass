import { memo } from "react"
import download from "../images/download.png";

const BillingItem = ({data}) => {
    return(
        <tr className="w-full h-20 bg-white divide-y divide-dashed hover:divide-solid hover:text-purple-700 hover:font-bold hover:border-2 hover:border-purple-200">
            <td className="px-5"><input type="checkbox" name="history" /></td>
            <td>{data.invoice}</td>
            <td>USD{data.amount}.00</td>
            <td className="md:block hidden">{data.date}</td>
            <td><img src={data.status} alt="download" className="md:block hidden w-50 h-7 shadow rounded-md" /></td>
            <td className="md:flex hidden">
                {data.usersOnPlan.map(
                    (img, index) => <img key={index} className="w-10 h-10" src={img} alt="profile"/>)
                }
                <span className="bg-white rounded-xl shadow">+2</span>
            </td>
            <td className="md:block hidden"><img src={download} alt="download" width={15} height={15} /></td>
        </tr>
    )
}

export default memo(BillingItem);