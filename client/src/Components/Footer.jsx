const Footer = () => {

    return (
        <div className="footer">
            <div className="wrapper">
                <div className="footerContent">
                    <img src={"/Images/logo.png"} alt="logo" />
                    <div>
                        <a href='https://t.me/cleanswap_support' target='_blank'>
                            <img src={'/Images/Telegram.svg'} alt="telegram" />
                        </a>
                        <a href={`https://wa.me/34632438008`} target='_blank'>
                            <img className="img" src={'/Images/WhatsApp.svg'} alt="whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer