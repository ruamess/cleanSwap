import { makeAutoObservable } from "mobx"

class User {
  auth = localStorage.getItem("auth") || false
  email = ""
  password = ""
  user = localStorage.getItem("user") || ""
  userId = localStorage.getItem("userId") || null
  admin = localStorage.getItem("admin") || false

  loginError = false
  regError = false
  loginErrorText = ""
  regErrorText = ""

  constructor() {
    makeAutoObservable(this)
  }

  changeLoginErrorTrue(text) {
    this.loginError = true
    this.loginErrorText = text
  }
  changeLoginErrorFalse() {
    this.loginError = false
  }

  changeRegErrorTrue(text) {
    this.regError = true
    this.regErrorText = text
  }
  changeRegErrorFalse() {
    this.regError = false
  }

  changeFields(e, p) {
    this.email = e
    this.password = p
  }

  changeEmail(e) {
    this.email = e
  }
  changePassword(e) {
    this.password = e
  }

  changeAuthTrue() {
    this.auth = true
  }
  changeAuthFalse() {
    this.auth = false
  }
  changeData(user, userId, admin) {
    this.user = user
    this.userId = userId
    this.auth = true
    this.admin = admin
    localStorage.setItem("auth", true)
    localStorage.setItem("user", user)
    localStorage.setItem("userId", userId)
    localStorage.setItem("admin", admin)
    console.log(this.admin)
    console.log(this.auth)
    console.log(this.userId)
  }
  clearData() {
    this.user = ""
    this.userId = ""
    this.auth = false
    this.admin = false
    localStorage.removeItem("auth")
    localStorage.removeItem("user")
    localStorage.removeItem("userId")
    localStorage.removeItem("admin")
    console.log(this.admin)
  }
}

export default new User()
