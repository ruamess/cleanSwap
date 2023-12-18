import exchange from "../Store/exchange"
import SelectGet from "./SelectGet"
import SelectGive from "./SelectGive"
import { observer } from "mobx-react-lite"

const CryptoToCrypto = observer((props) => {
    return (
        <>
         <SelectGive/>
         <input onChange={(e) => {
            exchange.changeCountGiveCryptoToCrypto(e.target.value)
            exchange.getCountGetCryptoToCrypto()
            exchange.changeTotalPrice()
            }} value={exchange.countGive} className="countGive" placeholder={props.language ? "Количество" : "Count"}/>
         <h2>{props.language ? "Получаете" : "Get"}</h2>
         <SelectGet/>
         <input value={exchange.countGet} onChange={(e) => exchange.changeCountGetCryptoToCrypto(e.target.value)} className="countGet" placeholder={props.language ? "Количество" : "Count"}/>
         <input value={exchange.cryptoWallet} onChange={(e) => exchange.changeCryptoWalletCryptoToCrypto(e.target.value)} className="countGet" placeholder={props.language ? "Номер Кошелька" : "Wallet Number"}/>
         <input value={exchange.email} onChange={(e) => {exchange.changeEmailCryptoToCrypto(e.target.value)
             exchange.changeTotalPrice()
        }} className="countGet" placeholder={props.language ? "Почта" : "Email"}/>
         <p>{props.language ? `Общая цена: ${exchange.totalPrice}$` : `Total price: ${exchange.countGive * exchange.giveCryptoPrice}$`}</p>
        </>
    )
})
export default CryptoToCrypto