import { memo } from "react"
import mark from "../images/mark.png"

const CreditCard = (props) => {
    return (
        <div className="flex justify-around" >
            <img src={props.card.image} alt="Visa logo" width={50} height={40}/>
            <div>
                <p>Visa ending in {props.card.cardNo.slice(-4)}</p>
                <p>Expiry {props.card.expDate}</p>
                <div>
                    <span>Set as default</span>
                    <span>Edit</span>
                </div>
            </div> 
            <img src={mark} width={50} height={50} alt="Marked" />
        </div>
    )
}

export default memo(CreditCard);