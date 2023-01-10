import { memo } from "react"
import mark from "../images/mark.png"

const CreditCard = ({creditNo, image, expDate}) => {
    return (
        <div className="flex justify-around" >
            <img src={image} alt="Visa logo" width={50} height={20}/>
            <div>
                <p>Visa ending in {creditNo}</p>
                <p>Expiry {expDate}</p>
                <div><span>Set as default</span><span>Edit</span></div>
            </div> 
            <img src={mark} width={50} height={50} alt="Marked" />
        </div>
    )
}

export default memo(CreditCard);