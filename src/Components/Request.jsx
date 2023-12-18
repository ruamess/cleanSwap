import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import requests from '../Store/requests'
import user from '../Store/user'

const Request = observer((props) => {

    const [status, setStatus] = useState("")

    const changeStatus = () => {
        if (user.admin !== "true" && user.admin !== true) {
            console.log('def', user.admin);
            fetch('https://cleanswap.co/api/exchange/changeStatus', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: props.id, status: 'Canceled' })
            }).then((data) => data.json()).then((data) => {
                requests.getRequestsUser()
                requests.getAllRequests()
            })
        }
        else {
            console.log('adm');
            fetch('https://cleanswap.co/api/exchange/changeStatus', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: props.id, status: 'Completed' })
            }).then((data) => data.json()).then((data) => {
                requests.getAllRequests()
                requests.getRequestsUser()
            })
        }
    }

    const changeLangStatus = () => {
        console.log(123);
        if (props.status == 'Waiting for Payment' && props.language == true) {
            setStatus('Ожидание оплаты')
        }
        else if (props.status == 'Waiting for Payment' && props.language == false) {
            setStatus("Waiting for payment")
        }
        else if (props.status == 'Paid' && props.language == true) {
            setStatus("Оплачено")
        }
        else if (props.status == 'Paid' && props.language == false) {
            setStatus("Paid")
        }
        else if (props.status == "Canceled" && props.language == true) {
            setStatus("Отменен")
        }
        else if (props.status == "Canceled" && props.language == false) {
            setStatus("Canceled")
        }
        else if (props.status == 'Completed' && props.language == true) {
            setStatus('Завершен')
        }
        else if (props.status == 'Completed' && props.language == false) {
            setStatus('Completed')
        }
    }

    useEffect(() => {
        changeLangStatus()
    }, [props.language])

    console.log(status, props.language, props.status);

    return (
        <>
            <div>
                <div className={'request'}>
                    <p>{props.language ? `Почта: ${props.email}` : `Email: ${props.email}`}</p>
                    <div className='arrow'>
                        <p>{props.language ? `Статус: ${status}` : `Status: ${status}`}</p>

                    </div>
                </div>
                <div className={'requestInfo active'}>
                    <div className='requestData'>
                        <p>Id: {props.id}</p>
                        {props.name ? <p>{props.language ? `Имя: ${props.name}` : `Name: ${props.name}`}</p> : <></>}
                        {props.email ? <p>{props.language ? `Почта: ${props.email}` : `Email: ${props.email}`}</p> : <></>}
                        {props.cashcard ? <p>{props.language ? `Номер карты: ${props.cashcard}` : `Number of Card: ${props.cashcard}`}</p> : <></>}
                        {props.cryptocard ? <p>{props.language ? `Крипто кошелек: ${props.cryptocard}` : `Crypto Wallet: ${props.cryptocard}`}</p> : <></>}
                        {props.firstcurrency ? <p>{props.language ? `Отдает: ${props.firstcurrency}` : `Give: ${props.firstcurrency}`}</p> : <></>}
                        {props.firstcurrencyquantity ? <p>{props.language ? `Сколько отдает: ${props.firstcurrencyquantity}` : `Count of Give: ${props.firstcurrencyquantity}`}</p> : <></>}
                        {props.secondcurrency ? <p>{props.language ? `Получает: ${props.secondcurrency}` : `Get: ${props.secondcurrency}`}</p> : <></>}
                        {props.secondcurrencyquantity ? <p>{props.language ? `Сколько получает: ${props.secondcurrencyquantity}` : `Count of Get: ${props.secondcurrencyquantity}`}</p> : <></>}
                    </div>
                    <button onClick={changeStatus} className='btnClosed'>{user.admin == 'true' || user.admin == true ? `${props.language ? 'Завершить' : 'Completed'}` : `${props.language ? "Отменить" : "Canceled    "}`}</button>
                </div>
            </div>
        </>
    )
})
export default Request