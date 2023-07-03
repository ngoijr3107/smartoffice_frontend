import axios from 'axios'
import AppConstant from './AppConstant'

export default {
  methods: {
    async getVisitors () {
      try {
        const response = await axios.get(AppConstant.baseUrl + 'getVisitors')
        const visitorList = response.data
        console.log(visitorList)
        // Do something with the visitorList
      } catch (error) {
        console.error(error)
      }
    }
  }
  // Other component properties and methods
}
