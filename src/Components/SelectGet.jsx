import {useState } from "react"
import {BiSolidDownArrow} from 'react-icons/bi'
import exchange from "../Store/exchange"
import rates from "../Store/rates"

const SelectGet = (props) => {
    const [isOpen, setIsOpen] = useState(false)
   

    const changeSelected = (el) => {
        exchange.clearData()
        exchange.changeGet(el.name, el.symbol, el.symbol, el?.values?.USD.price)
        setIsOpen(false)
        exchange.changeGetType(el.type)
        
    }
    

    return (
        <>
            <div className="select">
                <div onClick={() => setIsOpen((old) => !old)} className="selected">
                   <div className="selectedInfo">
                    <img src={`/Images/${exchange.getCryptoImg}.svg`} rel="crypto"/>
                     <p>{exchange.getCryptoName} / {exchange.getCryptoSym}</p>
                   </div>
                    <BiSolidDownArrow className={isOpen ? 'arrowSign open' : 'arrowSign closed'}/>
                </div>
                <div className={isOpen ? "allValues openList" : 'allValues closedList'}>
                    {rates.rates.map((el, idx) => {
                        if(idx == 0 && idx < 21 && exchange.getCryptoPrice == 0) {
                            exchange.changeGetPrice(el.values.USD.price)
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
                       if(exchange.giveType != 'bank') {
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
}
export default SelectGet