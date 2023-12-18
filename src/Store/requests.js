import { makeAutoObservable } from "mobx"
import user from "./user"

class Requests {
    requests = []
    requestsUser = []
    constructor() {
        makeAutoObservable(this)
    }
    getRequestsUser() {
        this.requestsUser = []
        fetch("https://cleanswap.co/api/exchange/getRequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: user.userId }),
        })
            .then((data) => data.json())
            .then((data) => {
                data.map((el) => {
                    this.requestsUser.push(el)
                })
            })
    }

    getAllRequests() {
        this.requests = []
        fetch("https://cleanswap.co/api/exchange/getAllRequests")
            .then((data) => data.json())
            .then((data) => {
                data.map((el) => {
                    console.log(el)
                    this.requests.push(el)
                })
            })
    }
}
export default new Requests()
