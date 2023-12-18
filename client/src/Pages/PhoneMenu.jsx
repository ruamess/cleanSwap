import { NavLink } from "react-router-dom"
import user from "../Store/user"
import {observer} from 'mobx-react-lite'
import exchange from "../Store/exchange"
import { useEffect, useRef, useState } from "react"
import {GiHamburgerMenu} from 'react-icons/gi'

const PhoneMenu = observer((props) => {



    if(user.auth == false || user.auth == "false") {
        return (
            <>
            <div className="navBar">
                <div className="wrapper">
                    <div className="navBarContent">
                    <div className="logoBurger">
                            <img className="logoImg" src={'/Images/logo.png'} alt="logo" />
                            <GiHamburgerMenu onClick={() => window.history.back()}  className="burger"/>
                        </div>
                            <div   className="shown1">
                            <ul  className={props.language ? "navBlock1 ru" : 'navBlock1 en'}>
                            <li ><NavLink to={'/rates'}>{props.language ? "Курс обмена" : "Exchange Rates"}</NavLink></li>
                            <li ><NavLink to={'/registration'}>{props.language ? "Обмен" : "Exchange"}</NavLink></li>
                            <li ><NavLink to={'/registration'}>{props.language ? "Запросы" : "Requests"}</NavLink></li>
                            <li ><NavLink to={'/support'}>{props.language ? "Поддержка" : "Support"}</NavLink></li>
                        </ul>
                        <ul  className="userBlock1">
                            <li className={props.language ? "ru" : 'en'}><NavLink to={'/registration'}>{props.language ? "Регистрация" : "Sign Up"}</NavLink></li>
                            <li ><NavLink to={'/login'}>{props.language ? "Авторизация" : "Sign In"}</NavLink></li>
                            <li onClick={() => props.setLanguage((old) => !old)} className="language"><img className="languageImg" src={props.language ? '/Images/Russia.svg' : '/Images/UnitedStates.svg'} alt="language" /></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
    else if((user.auth == true || user.auth == 'true') && (user.admin == false || user.admin == 'false')) {
        return (
            <>
            <div className="navBar">
                <div className="wrapper">
                    <div className="navBarContent">
                        <div className="logoBurger">
                            <img className="logoImg" src={'/Images/logo.png'} alt="logo" />
                            <GiHamburgerMenu onClick={() => window.history.back()} className="burger"/>
                        </div>
                        <div  className="shown1">
                        <ul  className={props.language ? "navBlock1 ru" : 'navBlock1 en'}>
                            <li ><NavLink to={'/rates'}>{props.language ? "Курс обмена" : "Exchange Rates"}</NavLink></li>
                            <li ><NavLink to={'/exchange'}>{props.language ? "Обмен" : "Exchange"}</NavLink></li>
                            <li ><NavLink to={'/requests'}>{props.language ? "Запросы" : "Requests"}</NavLink></li>
                            {exchange.activeRequest ? <li ><NavLink to={'/payment'}>{props.language ? "Активный запрос" : "Active Request"}</NavLink></li> : <></>}
                            <li ><NavLink to={'/support'}>{props.language ? "Поддержка" : "Support"}</NavLink></li>
                        </ul>
                        <ul  className="userBlock1">
                            <li><NavLink>{user.user}</NavLink></li>
                            <li onClick={() => {
                                user.clearData()}}>
                                    <NavLink to={'/login'}>{props.language ? "Выйти" : "Exit"}</NavLink></li>
                            <li onClick={() => props.setLanguage((old) => !old)} className="language"><img className="languageImg" src={props.language ? '/Images/Russia.svg' : '/Images/UnitedStates.svg'} alt="language" /></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
    else if((user.auth == "true" || user.auth == true) && (user.admin == "true" || user.admin == true)) {
        return (
            <>
            <div className="navBar">
                <div className="wrapper">
                    <div className="navBarContent">
                    <div className="logoBurger">
                            <img className="logoImg" src={'/Images/logo.png'} alt="logo" />
                            <GiHamburgerMenu onClick={() => window.history.back()} className="burger"/>
                        </div>
                        <div  className="shown1">
                        <ul  className={props.language ? "navBlock1 ru" : 'navBlock1 en'}>
                            <li ><NavLink to={'/rates'}>{props.language ? "Курс обмена" : "Exchange Rates"}</NavLink></li>
                            <li ><NavLink to={'/exchange'}>{props.language ? "Обмен" : "Exchange"}</NavLink></li>
                            <li ><NavLink to={'/admin'}>{props.language ? "Админ панель" : "Admin Panel"}</NavLink></li>
                            {exchange.activeRequest ? <li className="active"><NavLink to={'/payment'}>{props.language ? "Активный запрос" : "Active Request"}</NavLink></li> : <></>}
                            <li ><NavLink to={'/support'}>{props.language ? "Поддержка" : "Support"}</NavLink></li>
                        </ul>
                        <ul  className="userBlock1">
                            <li><NavLink>{user.user}</NavLink></li>
                            <li onClick={() => {
                                user.clearData()}}>
                                    <NavLink to={'/login'}>{props.language ? "Выйти" : "Exit"}</NavLink></li>
                            <li onClick={() => props.setLanguage((old) => !old)} className="language"><img className="languageImg" src={props.language ? '/Images/Russia.svg' : '/Images/UnitedStates.svg'} alt="language" /></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
    else {
    }
    
})
export default PhoneMenu