import axios from 'axios'


const BASE_URL="https://dull-sarong-worm.cyclic.app/api"

export const publicRequest= axios.create({
   baseURL:BASE_URL
})