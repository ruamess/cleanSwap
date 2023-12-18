import exchange from "../Store/exchange"
import CryptoToCrypto from "./CryptoToCrypto"
import CryptoToMoney from "./CryptoToMoney"
import MoneyToCrypto from "./MoneyToCrypto"
import { observer } from "mobx-react-lite"
const ChangeValue = observer((props) => {
    if((exchange.getType == 'coin' || exchange.getType == 'token') && (exchange.giveType == 'coin' || exchange.giveType == 'token')) {
        console.log(exchange.getType, exchange.giveType);
        return <CryptoToCrypto language={props.language}/>
    }
    else if(exchange.giveType == 'bank' && (exchange.getType == 'coin' || exchange.getType == 'token')) {
        return <MoneyToCrypto language={props.language}/>
    }
    else if((exchange.giveType == 'coin' || exchange.giveType == 'token') && exchange.getType == 'bank') {
        return <CryptoToMoney language={props.language}/>
    }
    else {
        return <h1>Error</h1>
    }
})
export default ChangeValue