import NavBar from "./Components/NavBar"
import {Routes, Route} from 'react-router-dom'
import Rates from "./Pages/Rates"
import { useEffect, useState } from "react"
import Exchange from "./Pages/Exchange"
import Registration from "./Pages/Registration"
import Login from "./Pages/Login"
import rates from "./Store/rates"
import requests from "./Store/requests"
import Requests from "./Pages/Requests"
import AdminPanel from "./Pages/AdminPanel"
import { Observer, observer } from "mobx-react-lite"
import user from "./Store/user"
import PaymentWindow from "./Pages/PaymentWindow"
import Support from "./Pages/Support"
import Footer from "./Components/Footer"
import PhoneMenu from "./Pages/PhoneMenu"

const App = observer(() => {
  const [language, setLanguage] = useState(false)

  useEffect(() => {
    rates.fetchRates()
    console.log(localStorage);
  }, [])


  useEffect(() => {
    const preventSwipe = event => {
      const { clientY, deltaY } = event.touches[0];
      
      if (deltaY > 0 && clientY >= startY && clientY <= endY) {
        event.preventDefault();
      }
    };

    const startY = 10; // Начальная позиция для блокировки свайпа вверх
    const endY = window.innerHeight - 10; // Позиция для блокировки свайпа вниз

    window.addEventListener('touchmove', preventSwipe, { passive: false });

    return () => {
      window.removeEventListener('touchmove', preventSwipe);
    };
  }, []);

  return (
    <>
      <NavBar language={language} setLanguage={setLanguage}/>
      <div className="wrapper">
         <Routes>
         <Route path="/" element={<Rates language={language}/>}/>
         <Route path="/rates" element={<Rates language={language}/>}/>
         <Route path="/exchange" element={<Exchange language={language}/>}/>
         <Route path="/requests" element={<Requests language={language}/>}/>
         <Route path="/registration" element={<Registration language={language} title={language ? 'Регистрация' :'Registration'}/>}/>
         <Route path="/login" element={<Login language={language} title={language ? 'Авторизация' : 'Login'}/>}/>
         <Route path="/admin" element={<AdminPanel language={language}/>}/>
         <Route path="/payment" element={<PaymentWindow language={language}/>}/>
         <Route path="/support" element={<Support language={language}/>}/>
         <Route path="/phoneMenu" element={<PhoneMenu language={language} setLanguage={setLanguage}/>}/>
       </Routes>
       </div>
       <Footer/>
    </>
   
  )
})
export default App