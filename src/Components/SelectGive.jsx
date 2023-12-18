import {useState } from "react"
import {BiSolidDownArrow} from 'react-icons/bi'
import exchange from "../Store/exchange"
import rates from "../Store/rates"
import { observer } from "mobx-react-lite"

const SelectGive = observer((props) => {
    const [isOpen, setIsOpen] = useState(false)
   

    const changeSelected = (el) => {
        setIsOpen(false)
        exchange.clearData()
        exchange.changeGive(el.name, el.symbol, el.symbol, el?.values?.USD.price)
        exchange.changeGiveType(el.type)
    }
    

    return (
        <>
            <div className="select">
                <div onClick={() => setIsOpen((old) => !old)} className="selected">
                   <div className="selectedInfo">
                    <img src={`/Images/${exchange.giveCryptoImg}.svg`} rel="crypto"/>
                     <p>{exchange.giveCryptoName} / {exchange.giveCryptoSym}</p>
                   </div>
                    <BiSolidDownArrow className={isOpen ? 'arrowSign open' : 'arrowSign closed'}/>
                </div>
                <div className={isOpen ? "allValues openList" : 'allValues closedList'}>
                    {rates.rates.map((el, idx) => {
                        if(idx == 0 && idx < 21 && exchange.giveCryptoPrice == 0) {
                            exchange.changeGivePrice(el.values.USD.price)
                            return <div key={el.id} onClick={() => changeSelected(el)} className="listItem">
                            <img src={`/Images/${el.symbol}.svg`} alt="" />
                            <p>{el.name}</p>
                            </div>
                        }
                        
                        if(idx < 21) {
                            return <div key={el.id} onClick={() => changeSelected(el)} className="listItem">
                            {el.symbol == 'ADA' || el.symbol == 'APT' || el.symbol == 'WBTC' ? <img src={`/Images/${el.symbol}.png`} alt="" /> :<img src={`/Images/${el.symbol}.svg`} alt="" />}
                            <p>{el.name}</p>
                            </div>
                           }
                           if(exchange.getType != 'bank') {
                            if(idx >= 21 && idx <= 34 ) {
                                return <div key={el.id} className="listItem" onClick={() => changeSelected(el)}>
                                    <img src={`/Images/${el.symbol}.svg`}/>
                                    <p>{el.name}</p>
                                </div>
                               }
                           }
                           
                       

                    })}
                </div>
            </div>
        </>
    )
})
export default SelectGive