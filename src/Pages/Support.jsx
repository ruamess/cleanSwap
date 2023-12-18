import Footer from "../Components/Footer"

const Support = (props) => {


    return (
        <div className="mainSupport">
            <div className="support">
                    <h1>{props.language ? "Поддержка" : "Support"}</h1>
                    <div className="supportContent">
                        <div className="contact">
                            <img src={'/Images/Telegram.svg'} alt="telegram" />
                            <a href='https://t.me/cleanswap_support' target='_blank'>@cleanswap_support</a>
                        </div>
                        <div className="contact1">
                            <img className="img" src={'/Images/WhatsApp.svg'} alt="telegram" />
                            <a href={`https://wa.me/34632438008`} target='_blank'>+34 632 438 008</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Support