import axios from 'axios'
import { AppConstant } from './AppConstant'

export default {
  getDepartment () {
    try {
      const response = axios.get(AppConstant.baseUrl + 'getDepartment')
      const departmentList = response.data
      return departmentList
    } catch (error) {
      console.log(error)
    }
  }
}
