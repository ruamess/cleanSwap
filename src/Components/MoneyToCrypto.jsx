import { observer } from "mobx-react-lite"
import exchange from "../Store/exchange"
import SelectGet from "./SelectGet"
import SelectGive from "./SelectGive"

const MoneyToCrypto = observer((props) => {
    return (
        <>
         <SelectGive/>
         <input value={exchange.countGive} onChange={(e) => exchange.changePriceMoneyToCrypto(e.target.value)} className="countGive" placeholder={props.language ? "Сумма" : "Sum"}/>
         <input onChange={(e) => exchange.changeName(e.target.value)} value={exchange.nameSurname} className="countGet" placeholder={props.language ? "Имя Фамилия" : "Name Surname"}/>
         <input className="countGet" value={exchange.email} onChange={(e) => exchange.changeEmailCryptoToCrypto(e.target.value)} placeholder={props.language ? "Почта" : "Email"}/>

         <h2>{props.language ? "Получаете" : "Get"}</h2>
         <SelectGet/>
         <input className="countGet"  onChange={(e) => exchange.changePriceGetMoneyToCrypto(e.target.value)} value={exchange.countGet} placeholder={props.language ? "Количество" : "Count"}/>
         <input className="countGet" value={exchange.cryptoWallet} onChange={(e) => exchange.changeCryptoWalletCryptoToCrypto(e.target.value)} placeholder={props.language ? "Номер Кошелька" : "Wallet Number"}/>
        </>
    )
})
export default MoneyToCrypto