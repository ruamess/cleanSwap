import { makeAutoObservable } from "mobx"

class Rates {
  rates = []
  constructor() {
    makeAutoObservable(this, {}, { deep: true })
  }

  coins = [
    "BTC",
    "ETH",
    "USDT",
    "MATIC",
    "BNB",
    "LTC",
    "ARB",
    "APT",
    "OP",
    "ADA",
    "DOGE",
    "DOT",
    "XRP",
    "USDC",
    "SHIB",
    "DAI",
    "TRX",
    "WBTC",
    "BUSD",
    "SOL",
  ]
  fetchRates() {
    fetch(
      "https://api.cryptorank.io/v1/currencies?api_key=4157ea4f8cffc4f5240e495ca13fe0fd20ea54a23a6cb46006dce94f53d9"
    )
      .then((data) => data.json())
      .then((data) => {
        data.data.map((el, idx) => {
          this.coins.map((el1) => {
            if (el1 == el.symbol) {
              if (el.name == "BNB") {
                el.values.USD.price *= 1.05
              }
              if (el.name == "Bitcoin") {
                el.values.USD.price *= 0.95
              }
              this.rates.push(el)
            }
          })
        })
        this.rates.push({
          id: 122,
          name: "Alfa Bank",
          symbol: "Alfabank",
          type: "bank",
        })
        this.rates.push({
          id: 123,
          name: "Sberbank",
          symbol: "Sberbank",
          type: "bank",
        })
        this.rates.push({
          id: 124,
          name: "Tinkof",
          symbol: "Tinkof",
          type: "bank",
        })
        this.rates.push({
          id: 125,
          name: "Raiffeisen",
          symbol: "Raiffeisen",
          type: "bank",
        })
        this.rates.push({
          id: 126,
          name: "Privat Bank",
          symbol: "PrivatBank",
          type: "bank",
        })
        this.rates.push({
          id: 127,
          name: "Mono Bank",
          symbol: "Mono",
          type: "bank",
        })
        this.rates.push({
          id: 128,
          name: "Pumb Bank",
          symbol: "Pumb",
          type: "bank",
        })
        this.rates.push({
          id: 129,
          name: "Oschad Bank",
          symbol: "Oschad",
          type: "bank",
        })
        this.rates.push({
          id: 130,
          name: "Deutsche Bank",
          symbol: "Deutsche",
          type: "bank",
        })
        this.rates.push({
          id: 131,
          name: "HSBC",
          symbol: "HSBC",
          type: "bank",
        })
        this.rates.push({
          id: 132,
          name: "BNP Paribas",
          symbol: "BNP",
          type: "bank",
        })
        this.rates.push({
          id: 133,
          name: "JPMorgan Chase",
          symbol: "JP",
          type: "bank",
        })
        this.rates.push({
          id: 134,
          name: "Bank of America",
          symbol: "America",
          type: "bank",
        })
        this.rates.push({
          id: 135,
          name: "Citigroup",
          symbol: "Citi",
          type: "bank",
        })
      })
  }
}

export default new Rates()
