import { useNavigate } from "react-router-dom";
import user from "../Store/user";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import Footer from "../Components/Footer";

const Registration = observer((props) => {

    const [isValid, setIsValid] = useState(true)

    const navigate = useNavigate()

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    console.log(isValid);
    const Registr = () => {
        fetch('https://cleanswap.co/api/user/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: user.email, password: user.password })
        }).then((data) => data.json()).then((data) => {
            if (emailRegex.test(user.email)) {
                setIsValid(true)
            }
            else {
                setIsValid(false)
            }
            if (data['message'] || isValid == false) {
                user.changeRegErrorTrue(data.message)
            }
            else {
                navigate('/login')
                user.changeRegErrorFalse()
            }
        }).catch((err) => console.log('error'))
    }
    return (
        <div className="mainAuth">
            <div className="auth">
                <h1>{props.title}</h1>
                <div className="flexAuth">
                    <input value={props.email} type="email" onChange={(e) => user.changeEmail(e.target.value)} placeholder={props.language ? "Почта" : "Email"} />
                    <input value={props.password} onChange={(e) => user.changePassword(e.target.value)} type="password" placeholder={props.language ? "Пароль" : "Password"} />
                    {user.regError ? <p className="red">{props.language ? "Некорректные данные или такой пользователь уже существует" : "Incorrect data or such user already exists"}</p> : <></>}
                    <button onClick={Registr}>{props.title}</button>
                </div>
            </div>
        </div>
    )
})
export default Registration