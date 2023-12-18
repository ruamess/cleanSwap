import { observer } from "mobx-react-lite";
import user from "../Store/user";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../Components/Footer";


const Login = observer((props) => {

    const [isValid, setIsValid] = useState(true)


    const navigate = useNavigate()

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    const auth = () => {
        fetch('https://cleanswap.co/api/user/login', {
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
            console.log(isValid, data);
            if (data['message'] || isValid == false) {
                user.changeLoginErrorTrue(data.message)
            }
            else {
                user.changeData(data.user.email, data.user.id, data.user.admin)
                navigate('/rates')
                user.changeLoginErrorFalse()
            }
        }).catch((err) => console.log('error'))
    }

    return (
        <div className="mainAuth">
            <div className="auth">
                <h1>{props.title}</h1>
                <div className="flexAuth">
                    <input value={props.email} onChange={(e) => user.changeEmail(e.target.value)} type="email" placeholder={props.language ? "Почта" : "Email"} />
                    <input value={props.password} onChange={(e) => user.changePassword(e.target.value)} type="password" placeholder={props.language ? "Пароль" : "Password"} />
                    {user.loginError ? <p className="red">{props.language ? "Неверный email или пароль" : "Invalid email or password"}</p> : <></>}
                    <button onClick={auth} >{props.title}</button>
                </div>
            </div>
        </div>
    )
})
export default Login