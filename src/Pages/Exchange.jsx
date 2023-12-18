import SelectGive from "../Components/SelectGive"
import SelectGet from "../Components/SelectGet"
import { observer } from 'mobx-react-lite'
import exchange from "../Store/exchange"
import CryptoToMoney from "../Components/CryptoToMoney"
import MoneyToCrypto from "../Components/MoneyToCrypto"
import ChangeValue from "../Components/ChageValue"
import CryptoToCrypto from "../Components/CryptoToCrypto"
import user from "../Store/user"
import requests from "../Store/requests"
import { useNavigate } from "react-router-dom"
import Footer from "../Components/Footer"

const Exchange = observer((props) => {

    const navigate = useNavigate()

    const createReq = () => {
        if (exchange.countGive >= 100 && exchange.countGive <= 100000 && exchange.giveType == 'bank') {
            fetch('https://cleanswap.co/api/exchange/createRequest', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user.userId, name: exchange.nameSurname, cashcard: exchange.cardNumber || null, cryptocard: exchange.cryptoWallet || null, firstcurrency: exchange.giveCryptoName, firstcurrencyquantity: exchange.countGive,
                    secondcurrency: exchange.getCryptoName, secondcurrencyquantity: exchange.countGet, status: 'Waiting for Payment', email: exchange.email
                })
            }).then((data) => data.json()).then((data) => {

                exchange.changeActive(data.id)
                navigate('/payment')
                exchange.changPaidFalse()
                exchange.changeLimitFalse()
            })
            requests.getRequestsUser()
        }
        else if (exchange.totalPrice >= 100 && exchange.totalPrice <= 100000 && (exchange.giveType == 'coin' || exchange.giveType == 'token') && (exchange.getType == 'coin' || exchange.getType == 'token')) {
            fetch('https://cleanswap.co/api/exchange/createRequest', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user.userId, name: exchange.nameSurname, cashcard: exchange.cardNumber || null, cryptocard: exchange.cryptoWallet || null, firstcurrency: exchange.giveCryptoName, firstcurrencyquantity: exchange.countGive,
                    secondcurrency: exchange.getCryptoName, secondcurrencyquantity: exchange.countGet, status: 'Waiting for Payment', email: exchange.email
                })
            }).then((data) => data.json()).then((data) => {
                exchange.changeActive(data.id)
                navigate('/payment')
                exchange.changPaidFalse()
                exchange.changeLimitFalse()

            })
            requests.getRequestsUser()
        }
        else if (exchange.countGet >= 100 && exchange.countGet <= 100000 && exchange.getType == 'bank') {
            fetch('https://cleanswap.co/api/exchange/createRequest', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user.userId, name: exchange.nameSurname, cashcard: exchange.cardNumber || null, cryptocard: exchange.cryptoWallet || null, firstcurrency: exchange.giveCryptoName, firstcurrencyquantity: exchange.countGive,
                    secondcurrency: exchange.getCryptoName, secondcurrencyquantity: exchange.countGet, status: 'Waiting for Payment', email: exchange.email
                })
            }).then((data) => data.json()).then((data) => {
                exchange.changeActive(data.id)
                navigate('/payment')
                exchange.changPaidFalse()
                exchange.changeLimitFalse()
            })
            requests.getRequestsUser()

        }
        else {
            exchange.changeLimitTrue()
        }
    }

    return (
        <div className="mainExchange">
            <div className="exchange">
                <h1>{props.language ? "Обмен" : "Exchange"}</h1>
                <div className="give">
                    <h2>{props.language ? "Отдаете" : "Give Away"}</h2>
                    <p>{!props.language ? `Exchange Rate: 1 ${exchange.giveCryptoSym} - ${(exchange.giveCryptoPrice / exchange.getCryptoPrice) || exchange.giveCryptoPrice || exchange.getCryptoPrice} ${exchange.getCryptoSym}` :
                        `Курс Обмена: 1 ${exchange.giveCryptoSym} - ${exchange.giveCryptoPrice / exchange.getCryptoPrice} ${exchange.getCryptoSym}`}</p>
                    <p>{props.language ? "Мин: 100$ - Макс: 100000$" : "Min: 100$ - Max: 100000$"}</p>
                    <ChangeValue language={props.language} />
                    {exchange.limit ? <p className="red">{props.language ? 'Не соответсвует лимиту' : "Doesn't meet the limit"}</p> : <></>}

                    <button onClick={createReq} className="createReq">{props.language ? 'Подтвердить' : "Confirm"}</button>
                </div>
            </div>
        </div>
    )
})
export default Exchange