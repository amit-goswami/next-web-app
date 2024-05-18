import HttpService from '@/services/HttpService'
import { ITrekDetail } from './trek-planner.interface'

const baseApiUrl = process.env.NEXT_PUBLIC_API_URL

const getTrekDetail = async (trekId: string) => {
  const getTrekDetailPayload = {
    trek: {
      trek_id: trekId
    }
  }
  try {
    const { data } = await HttpService.post(
      `${baseApiUrl}/trek/gettrekdetail`,
      getTrekDetailPayload
    )
    return data as ITrekDetail
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const getSearchedCities = async (searchInput: string) => {
  try {
    const response = await HttpService.get(
      `${baseApiUrl}/city?search=${searchInput}`
    )
    return response.data
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const trekDetailService = {
  getTrekDetail,
  getSearchedCities
}

export default trekDetailService
