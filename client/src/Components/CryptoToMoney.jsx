import { observer } from "mobx-react-lite"
import exchange from "../Store/exchange"
import SelectGet from "./SelectGet"
import SelectGive from "./SelectGive"

const CryptoToMoney = observer((props) => {
    return (
        <>
         <SelectGive/>
         <input value={exchange.countGive} onChange={(e) => exchange.changeCountGiveCryptoToMoney(e.target.value)} className="countGive" placeholder={props.language ? "Количество" : "Count"}/>
         <h2>{props.language ? "Получаете" : "Get"}</h2>
         <SelectGet/>
         <input className="countGet" onChange={(e) => exchange.changeCountGetCryptoToMoney(e.target.value)} value={exchange.countGet} placeholder={props.language ? "Количество" : "Count"}/>
         <input className="countGet" value={exchange.cardNumber} onChange={(e) => exchange.changeCardNumber(e.target.value)} placeholder={props.language ? "Номер карты" : "Сard number"}/>
         <input className="countGet" value={exchange.email} onChange={(e) => exchange.changeEmailCryptoToCrypto(e.target.value)} placeholder={props.language ? "Почта" : "Email"}/>
         <input className="countGet" value={exchange.nameSurname} onChange={(e) => exchange.changeName(e.target.value)} placeholder={props.language ? "Имя Фамилия" : "Name Surname"}/>
        </>
    )
})
export default CryptoToMoney