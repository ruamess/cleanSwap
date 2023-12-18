import { makeAutoObservable } from "mobx"

class Exchange {
  giveCryptoName = "Bitcoin"
  giveCryptoSym = "BTC"
  giveCryptoImg = "BTC"
  giveCryptoPrice = 0

  getCryptoName = "Bitcoin"
  getCryptoSym = "BTC"
  getCryptoImg = "BTC"
  getCryptoPrice = 0

  cardNumber = ""
  cryptoWallet = ""
  totalPrice = ""
  nameSurname = ""
  email = ""
  countGet = ""
  countGive = ""

  giveSelectedBank = false
  getSelectedBank = false

  giveType = "coin"
  getType = "coin"

  limit = false

  paid = false

  activeType = localStorage.getItem("activeType") || "coin"
  activeSym = localStorage.getItem("activeSym") || "BTC"
  activeName = localStorage.getItem("activeName") || "Bitcoin"
  activeCount = localStorage.getItem("activeCount") || 0
  activeId = localStorage.getItem("activeId") || null
  activeRequest = localStorage.getItem("activeRequest") || false

  constructor() {
    makeAutoObservable(this)
  }

  changePaidTrue() {
    this.paid = true
  }

  changPaidFalse() {
    this.paid = false
  }

  changeLimitTrue() {
    this.limit = true
  }
  changeLimitFalse() {
    this.limit = false
  }

  changeActive(id) {
    this.activeType = this.giveType
    this.activeSym = this.giveCryptoSym
    this.activeName = this.giveCryptoName
    this.activeCount = this.countGive
    this.activeId = id
    this.activeRequest = true
    localStorage.setItem("activeId", id)
    localStorage.setItem("activeType", this.activeType)
    localStorage.setItem("activeSym", this.activeSym)
    localStorage.setItem("activeName", this.activeName)
    localStorage.setItem("activeCount", this.activeCount)
    localStorage.setItem("activeRequest", this.activeRequest)
  }

  changeActiveReq() {
    this.activeRequest = false
    localStorage.removeItem("activeRequest")
  }

  clearData() {
    this.cardNumber = ""
    this.cryptoWallet = ""
    this.totalPrice = ""
    this.nameSurname = ""
    this.email = ""
    this.countGet = ""
    this.countGive = ""
  }

  changeGiveType(type) {
    this.giveType = type
  }

  changeGetType(type) {
    this.getType = type
  }

  changeGive(name, sym, img, price) {
    this.giveCryptoName = name
    this.giveCryptoSym = sym
    this.giveCryptoImg = img
    this.giveCryptoPrice = price
  }
  changeGet(name, sym, img, price) {
    this.getCryptoName = name
    this.getCryptoSym = sym
    this.getCryptoImg = img
    this.getCryptoPrice = price
  }

  changeCountGive(text) {
    this.countGive = text
    this.getCryptoPrice = this.countGive * this.giveCryptoPrice
  }
  changePriceGet(text) {
    this.getCryptoPrice = text
    this.countGive = this.getCryptoPrice / this.giveCryptoPrice
  }

  changePriceMoneyToCrypto(text) {
    this.giveCryptoPrice = text
    this.countGet = this.giveCryptoPrice / this.getCryptoPrice
    this.countGive = text
    this.activeCount = text
    localStorage.setItem("activeCount", this.countGive)
  }

  changePriceGetMoneyToCrypto(text) {
    this.countGet = text
    this.countGive = this.countGet * this.getCryptoPrice
    this.activeCount = this.countGive
    localStorage.setItem("activeCount", this.countGive)
  }

  changeGivePrice(price) {
    this.giveCryptoPrice = price
  }

  changeGetPrice(price) {
    this.getCryptoPrice = price
  }
  changeCountGiveCryptoToCrypto(text) {
    this.countGive = text
    this.activeCount = this.countGive
    localStorage.setItem("activeCount", this.countGive)
  }
  getCountGetCryptoToCrypto() {
    const priceForOne = this.giveCryptoPrice / this.getCryptoPrice
    this.countGet = priceForOne * this.countGive
  }
  changeCryptoWalletCryptoToCrypto(text) {
    this.cryptoWallet = text
  }
  changeEmailCryptoToCrypto(text) {
    this.email = text
  }
  changeName(text) {
    this.nameSurname = text
  }
  changeCardNumber(text) {
    this.cardNumber = text
  }
  changeCountGive(text) {
    this.countGive = text
  }
  changeCountGiveCryptoToMoney(text) {
    this.countGive = text
    this.countGet = this.countGive * this.giveCryptoPrice
  }
  changeCountGetCryptoToMoney(text) {
    this.countGet = text
    this.countGive = this.countGet / this.giveCryptoPrice
  }
  changeCountGetCryptoToCrypto(text) {
    this.countGet = text
    const total = this.countGet * this.getCryptoPrice
    this.countGive = total / this.giveCryptoPrice
  }
  changeTotalPrice() {
    this.totalPrice = this.countGive * this.giveCryptoPrice
  }
}
export default new Exchange()
