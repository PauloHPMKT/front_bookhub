import axios from "axios"

const baseURL = 'http://localhost:3333'

export const searchBook = async (input: string) => {
  try {
    const response = await axios.get(baseURL + '/books', {
        params: {
          search: input
        }
      })
    const { data } = response.data
    
    return data;
  } catch (error) {
    return null
  }
}