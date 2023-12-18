import { observer } from "mobx-react-lite"
import exchange from "../Store/exchange"
import requisites from "../Store/requisites"
import { AiOutlineCopy } from 'react-icons/ai'
import ClipboardJS from 'clipboard';
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import requests from "../Store/requests";
import Footer from "../Components/Footer";

const PaymentWindow = observer((props) => {

    const navigate = useNavigate()

    const changeStatus = () => {
        fetch('https://cleanswap.co/api/exchange/changeStatus', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: exchange.activeId, status: 'Paid' })
        }).then((data) => data.json()).then((data) => {
            exchange.changeActiveReq()
            requests.getAllRequests()
            exchange.changePaidTrue()
        })
    }

    const cancelReq = () => {
        fetch('https://cleanswap.co/api/exchange/changeStatus', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: exchange.activeId, status: 'Canceled' })
        }).then((data) => data.json()).then((data) => {
            navigate('/rates')
            exchange.changPaidFalse()
            exchange.changeActiveReq()
        })
    }

    const addressRef = useRef(null);
    const networkRef = useRef(null);
    const numberRef = useRef(null);

    const copyAddres = () => {
        const textElement = addressRef.current.textContent

        if (textElement) {
            const clipboard = new ClipboardJS('.copySym', {
                text: function () {
                    return textElement;
                }
            });

            clipboard.on('success', function (e) {
                e.clearSelection();
            });

            clipboard.on('error', function (e) {
                alert('Не удалось скопировать адрес в буфер обмена. Пожалуйста, скопируйте его вручную.');
            });
        }
    }

    const copyNetwork = () => {
        const textElement = networkRef.current.textContent

        if (textElement) {
            const clipboard = new ClipboardJS('.copySym', {
                text: function () {
                    return textElement;
                }
            });

            clipboard.on('success', function (e) {
                e.clearSelection();
            });

            clipboard.on('error', function (e) {
                alert('Не удалось скопировать адрес в буфер обмена. Пожалуйста, скопируйте его вручную.');
            });
        }
    }

    const copyNumber = () => {
        const textElement = numberRef.current.textContent

        if (textElement) {
            const clipboard = new ClipboardJS('.copySym', {
                text: function () {
                    return textElement;
                }
            });

            clipboard.on('success', function (e) {
                e.clearSelection();
            });

            clipboard.on('error', function (e) {
                alert('Не удалось скопировать адрес в буфер обмена. Пожалуйста, скопируйте его вручную.');
            });
        }
    }

    console.log(exchange.activeType, exchange.activeName);

    return (
        <div className="mainPayment">
            <div className="payment">
                <div className="window">
                    <h1>{props.language ? 'Окно оплаты' : 'Payment window'}</h1>
                    {exchange.activeType == 'coin' || exchange.activeType == 'token' ?
                        <div className="content">
                            {!exchange.paid ? <>{requisites.requisities.map((el) => {
                                if (el.name == exchange.activeSym) {
                                    return (<div className="info">
                                        <p>{props.language ? `Отправляйте только ${exchange.activeName} (${exchange.activeSym}) на этот адрес, иначе вы можете потерять свои средства.` : `Send only ${exchange.activeName} (${exchange.activeSym}) to this address or you may lose your funds.`}</p>
                                        <p className="copy addres">{props.language ? "Адрес: " : 'Address: '} <span ref={addressRef} >{el.addres}</span> <span onClick={copyAddres} ><AiOutlineCopy className="copySym" /></span></p>
                                        <p className="copy">{props.language ? 'Сеть: ' : "Network: "} <span ref={networkRef}>{el.network}</span> <span onClick={copyNetwork} ><AiOutlineCopy className="copySym" /></span></p>
                                        <p>{props.language ? 'Цена: ' : "Price: "} {exchange.activeCount} {exchange.activeSym}</p>
                                    </div>)
                                }
                            })}
                                <div className="btns">
                                    <button onClick={changeStatus}>{props.language ? "Я оплатил" : 'I have paid'}</button>
                                    <button onClick={cancelReq}>{props.language ? 'Отмена' : 'Cancel'}</button>
                                </div></> : <><div className="info">
                                    <p>{props.language ? 'В течение 20 минут, после поступления Ваших денег на наш счёт, заявка будет обработана и средства будут перечислены на указанный вами счёт.' : "Within 20 minutes after receiving your money to our account, the application will be processed and sent to the account you specified."}</p>
                                    <p>{props.language ? 'Но стоит учитывать что при перегрузки сервиса оплата может занимать более 20 минут.' : "But it should be borne in mind that when the service is overloaded, payment can take more than 20 minutes."}</p>
                                    <p>{props.language ? 'Пожалуйста убедитесь, что вы не только нажали на кнопку "Я оплатил", но и действительно перевели к нам средства.' : 'Please make sure that you have not only clicked on the "I have paid" button, but that you have actually transferred the funds to us.'}</p>
                                    <p>{props.language ? 'По всем вопросам или в случае задержки обмена, обращайтесь в техническую поддержку. С Уважением, администрация сайта!' : 'For all questions or in case of a delay in the exchange, please contact technical support. Sincerely, site administration!'}</p>
                                </div></>}
                        </div>
                        :
                        <div className="content" style={{ marginBottom: '23.9px' }}>
                            {!exchange.paid ? <> {requisites.requisities.map((el) => {
                                if (el.name == exchange.activeSym) {
                                    return (<div className="info">
                                        <p>{props.language ? 'Оплата в' : 'Payment in'} {exchange.activeName}</p>
                                        <p>{props.language ? 'Цена: ' : 'Price: '} {exchange.activeCount}$</p>
                                        <p className="copy">{props.language ? 'Номер карты: ' : 'Number of card: '} <span ref={numberRef}>{el.addres}</span> <span onClick={copyNumber} ><AiOutlineCopy className="copySym" /></span></p>
                                    </div>)
                                }
                            })}
                                <div className="btns">
                                    <button onClick={changeStatus}>{props.language ? "Я оплатил" : 'I have paid'}</button>
                                    <button onClick={cancelReq}>{props.language ? 'Отмена' : 'Cancel'}</button>
                                </div></> : <><div className="info">
                                    <p>{props.language ? 'В течение 20 минут, после поступления Ваших денег на наш счёт, заявка будет обработана и средства будут перечислены на указанный вами счёт.' : "Within 20 minutes after receiving your money to our account, the application will be processed and sent to the account you specified."}</p>
                                    <p>{props.language ? 'Но стоит учитывать что при перегрузки сервиса оплата может занимать более 20 минут.' : "But it should be borne in mind that when the service is overloaded, payment can take more than 20 minutes."}</p>
                                    <p>{props.language ? 'Пожалуйста убедитесь, что вы не только нажали на кнопку "Я оплатил", но и действительно перевели к нам средства.' : 'Please make sure that you have not only clicked on the "I have paid" button, but that you have actually transferred the funds to us.'}</p>
                                    <p>{props.language ? 'По всем вопросам или в случае задержки обмена, обращайтесь в техническую поддержку. С Уважением, администрация сайта!' : 'For all questions or in case of a delay in the exchange, please contact technical support. Sincerely, site administration!'}</p>
                                </div></>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
})
export default PaymentWindow