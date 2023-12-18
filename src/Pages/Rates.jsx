import rates from "../Store/rates"
import { RotatingLines } from 'react-loader-spinner'
import { observer } from 'mobx-react-lite'
import Footer from "../Components/Footer"

const Rates = observer((props) => {
    return (
        <div className="mainRates">
            <div className="rates">
                <h1>{props.language ? "Курс" : "Rates"}</h1>
                <div className="ratesList">
                    {rates.rates.length ? <>
                        {rates.rates.map((el, idx) => {
                            if (idx < 20 && (el.symbol == 'ADA' || el.symbol == "APT" || el.symbol == 'WBTC')) {
                                return (<div className="crypto">
                                    <img src={`/Images/${el.symbol}.png`} alt="" />
                                    <p>{el.symbol} - {el.values.USD.price}$</p>
                                </div>)
                            }
                            else if (idx < 20) {
                                return (<div className="crypto">
                                    <img src={`/Images/${el.symbol}.svg`} alt="" />
                                    <p>{el.symbol} - {el.values.USD.price}$</p>
                                </div>)
                            }
                        })}
                    </> :
                        <div className="block">
                            <RotatingLines
                                strokeColor="rgb(40,46,79)"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                            />
                        </div>
                    }
                </div>
            </div>

            <div className="info1">
                <div className="infoContent">
                    <div className="infoItem">
                        <img src="/Images/garant.png" alt="garant" />
                        <p>{props.language ? "Гарантия" : "Guarantee"}</p>
                        <p className="text">{props.language ? "Мы даём 100% гарантию перевода. Надежность нашего сервиса, подтверждают многочисленные отзывы довольных клиентов на авторитетных ресурсах." : "We give a 100% translation guarantee. The reliability of our service is confirmed by numerous reviews of satisfied customers on reputable resources."}</p>
                    </div>
                    <div className="infoItem">
                        <img src="/Images/conf.png" alt="confidience" />
                        <p>{props.language ? "Конфиденциальность" : "Confidentiality"}</p>
                        <p className="text">{props.language ? "Мы не храним и не передаем Вашу персональную информацию 3-им лицам." : "We do not store or share your personal information with third parties."}</p>
                    </div>
                    <div className="infoItem">
                        <img src="/Images/support.png" alt="support" />
                        <p>{props.language ? "Поддержка" : "Support"}</p>
                        <p className="text">{props.language ? 'Вежливая техническая поддержка, круглосуточно готова помочь Вам по любому вопросу.' : "Polite technical support, around the clock ready to help you on any issue."}</p>
                    </div>
                </div>
                <div className="infoMain">
                    <p>{props.language ? "Наш сервис помогает производить обмен криптовалютой безопасно и быстро. Для вас время – это деньги? Онлайн-сервис для покупки и обмена криптовалют CleanSwap поможет вам его сэкономить! Теперь вы можете купить криптовалюту по-настоящему быстро – все обмены на CleanSwap обрабатываются не более 15 минут." : "Our service helps to exchange cryptocurrency safely and quickly. Is time money for you? The online service for buying and exchanging cryptocurrencies CleanSwap will help you save it! Now you can buy cryptocurrency really quickly - all exchanges on CleanSwap are processed no more than 15 minutes."}</p>
                    <p>{props.language ? "Принцип работы обменника – уважение к пользователю. Поэтому мы предложим вам наиболее выгодный курс обмена или покупки биткоина и любой другой цифровой валюты на реальные деньги, и проведем обмен максимально быстро и безопасно. А вежливые сотрудники службы технической поддержки ответят на ваши вопросы в любое время, круглосуточно." : "The principle of the exchanger is respect for the user. Therefore, we will offer you the most favorable exchange rate or purchase of bitcoin and any other digital currency for real money, and we will carry out the exchange as quickly and safely as possible. And the polite technical support staff will answer your questions at any time, around the clock."}</p>
                    <p>{props.language ? "CleanSwap гарантирует конфиденциальность и защищенность проводимых операций, мы никогда не передаем информацию о пользователях третьим лицам. Надежность нашего сервиса подтверждает множество отзывов довольных клиентов на авторитетных ресурсах." : "CleanSwap guarantees the confidentiality and security of transactions, we never share user information with third parties. The reliability of our service is confirmed by many reviews of satisfied customers on reputable resources."}</p>
                    <p>{props.language ? "Обменник CleanSwap позволяет не только купить или обменять криптовалюты. Теперь, приглашая пользователей, вы можете получать деньги в качестве процента от дохода CleanSwap. Также, для постоянных клиентов предусмотрена накопительная система скидок, размер которых определяется суммой успешно выполненных конверсионных действий конкретным пользователем." : "The CleanSwap exchanger allows you not only to buy or exchange cryptocurrencies. Now, by inviting users, you can receive money as a percentage of CleanSwap income. Also, for regular customers, a cumulative system of discounts is provided, the amount of which is determined by the amount of successfully completed conversion actions by a particular user."}</p>
                    <p>{props.language ? "Покупка криптовалюты с CleanSwap – это быстро, выгодно и безопасно!" : "Buying cryptocurrencies with CleanSwap is fast, profitable and safe!"}</p>
                </div>
            </div>
        </div>
    )
})
export default Rates