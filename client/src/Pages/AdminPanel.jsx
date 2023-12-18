import { useEffect } from "react"
import Request from "../Components/Request"
import requests from "../Store/requests"
import { observer } from "mobx-react-lite"
import {RotatingLines} from 'react-loader-spinner'
import Footer from "../Components/Footer"


const AdminPanel = observer((props) => {

    useEffect(() => {
        requests.getAllRequests()
    }, [])

    return (
       <div className="mainAdmin">
           <div className="admin">
               <h1>{props.language ? "Админ панель" : "Admin Panel"}</h1>
               <div>
                 {requests.requests.length ? <> {requests.requests.map((el) => {
                   return <Request language={props.language} id={el.id} name={el.name} surname={el.surname} cashcard={el.cashcard} secondcurrencyquantity={el.secondcurrencyquantity} secondcurrency={el.secondcurrency} firstcurrencyquantity={el.firstcurrencyquantity} firstcurrency={el.firstcurrency} cryptocard={el.cryptocard} email={el.email} status={el.status}/>
                  })}</> : <div className="adminBlock">
                        <RotatingLines
                       strokeColor="rgb(40,46,79)"
                       strokeWidth="5"
                       animationDuration="0.75"
                       width="96"
                       visible={true}
                   />
                   </div>}
               </div>
           </div>
       </div>
    )
})
export default AdminPanel