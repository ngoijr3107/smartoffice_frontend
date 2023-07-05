import axios from 'axios'
import { AppConstant } from './AppConstant'

export default {
  async getVisitors () {
    try {
      const response = await axios.get(AppConstant.baseUrl + 'getVisitors')
      const visitorList = response.data
      return visitorList
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
