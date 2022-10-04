import axios from "axios"

const TOKEN = "ccspc8iad3ia79l0qnagccspc8iad3ia79l0qnb0"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})