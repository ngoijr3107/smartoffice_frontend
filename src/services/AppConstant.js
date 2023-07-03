import axios from 'axios'
export const AppConstant = {
  baseUrl:
    'http://smartofficebackend.test/api/',

  setDefaultHeader: function (header) {
    axios.defaults.headers.common.Authorization = header
  },
  postData: function (url, data) {
    return axios.post(AppConstant.baseUrl + url, data)
  },
  getData: function (url) {
    return axios.get(AppConstant.baseUrl + url)
  },

  getFileFromServer: function (url) {
    return axios.get(AppConstant.baseUrl + url, { responseType: 'blob' })
  },
  putData: function (url, data) {
    return axios.put(AppConstant.baseUrl + url, data)
  },
  deleteData: function (url) {
    return axios.delete(AppConstant.baseUrl + url)
  },

  dateOnly: function () {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    return yyyy + '-' + mm + '-' + dd
  },

  dateFromFirstOfMonth: function () {
    const today = new Date()
    const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
    const yyyy = today.getFullYear()

    return yyyy + '-' + mm + '-01'
  },

  dateTime: function () {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
    const yyyy = today.getFullYear()

    const hh = String(today.getHours()).padStart(2, '0')
    const min = String(today.getMinutes()).padStart(2, '0')
    const sec = String(today.getSeconds()).padStart(2, '0')

    return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + sec
  },

  convertToHex: function (str) {
    const res = []
    const { length: len } = str
    for (let n = 0, l = len; n < l; n++) {
      const hex = Number(str.charCodeAt(n)).toString(16)
      res.push(hex)
    }
    return res.join('')
  },

  convertHexToStr: function (hex) {
    return hex
      .match(/.{1,2}/g)
      .reduce((acc, char) => acc + String.fromCharCode(parseInt(char, 16)), '')
  },

  addDays: function (date, days) {
    const dates = new Date(date)
    const result = new Date(date)
    result.setDate(dates.getDate() + days)
    const dd = String(result.getDate()).padStart(2, '0')
    const mm = String(result.getMonth() + 1).padStart(2, '0') // January is 0!
    const yyyy = result.getFullYear()

    return yyyy + '-' + mm + '-' + dd
  },

  filterMonthFrom: function () {
    const today = new Date()
    const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
    const yyyy = today.getFullYear()

    return yyyy + '-' + mm + '-' + '01'
  },

  filterMonthTo: function () {
    const today = new Date()
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    const dd = String(lastDay.getDate()).padStart(2, '0')
    const mm = String(lastDay.getMonth() + 1).padStart(2, '0') // January is 0!
    const yyyy = lastDay.getFullYear()

    return yyyy + '-' + mm + '-' + dd
  }
}
