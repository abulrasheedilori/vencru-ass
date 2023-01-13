import { memo } from "react"
import unmarked from "../images/unmarked.png"

const CreditCard = ({card}) => {
    return (
        <div className="my-5 px-2 py-5 flex justify-between rounded-md shadow hover hover:bg-purple-100 hover:border-2 hover:border-purple-500 hover:text-purple-700 hover:transition-all hover:duration-700 hover:ease-in" >
            <div className="pr-10 flex justify-start">
                <img src={card.image} alt="Visa logo" className="w-10 h-6 mt-5 m-5 rounded border-2 shadow-sm"/>
                <div>
                    <p className="my-2 font-bold">{card.prepend + " " + card.cardNo.slice(-4)}</p>
                    <p>Expiry {card.expDate}</p>
                    <div>
                        <span className="mr-5">Set as default</span>
                        <span className="font-bold hover:bg-purple-700 hover:text-white p-1 rounded">Edit</span>
                    </div>
                </div>
            </div> 
                {
                    <button className="w-5 h-5" onClick={null}>
                        <img src={unmarked} className="w-5 h-5" alt="Marked" />
                    </button>
                }
        </div>
    )
}

export default memo(CreditCard);