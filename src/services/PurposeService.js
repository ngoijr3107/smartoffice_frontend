import axios from 'axios'
import { AppConstant } from './AppConstant'

export default {
  getPurpose () {
    try {
      const response = axios.get(AppConstant.baseUrl + 'getPurpose')
      const purposeList = response.data
      return purposeList
    } catch (error) {
      console.log(error)
    }
  }
}
