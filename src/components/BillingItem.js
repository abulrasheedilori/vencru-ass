import { memo } from "react"
import download from "../images/download.png";

const BillingItem = ({data}) => {
    return(
        <tr>
            <td><input type="checkbox" name="history" /></td>
            <td>{data.invoice}</td>
            <td>{data.amount}</td>
            <td>{data.date}</td>
            <td><img src={data.status} alt="download" width={15} height={15} /></td>
            <td className="flex relative">
                {data.usersOnPlan.map(
                    (img, index) => <img key={index} className="w-10 h-10" src={img} alt="profile"/>)
                }
                <span className="p-2 bg-red-600 rounded-xl shadow">+2</span>
            </td>
            <td><img src={download} alt="download" width={15} height={15} /></td>
        </tr>
    )
}

export default memo(BillingItem);