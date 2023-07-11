import axios from 'axios'
import { AppConstant } from './AppConstant'

export default {
  getSite () {
    try {
      const response = axios.get(AppConstant.baseUrl + 'getSite')
      const siteList = response.data
      return siteList
    } catch (error) {
      console.log(error)
    }
  }
}
