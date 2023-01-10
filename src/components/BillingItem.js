import { memo } from "react"
import download from "../images/download.png";

const BillingItem = (props) => {
    return(
        <div className="flex justify-between items-center gap-10 hover hover:bg-purple-700  hover:text-white shadow">
            <input type="checkbox" name="history" />
            <span className="w-auto">{props.data.invoice}</span>
            <span>{props.data.amount}</span>
            <span>{props.data.date}</span>
            <img src={props.data.status} alt="download" width={15} height={15} />
            <div className="flex">
                {props.data.usersOnPlan.map(
                    (img, index) => <img key={index} className="" src={img} alt="profile" width={15} height={15}/>)
                }
                <span>+2</span>
            </div>
            <img src={download} alt="download" width={15} height={15} />
        </div>
    )
}

export default memo(BillingItem);