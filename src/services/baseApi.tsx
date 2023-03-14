
import axios from 'axios';

const baseApi = () => {
  const baseApi = axios.create({
        baseURL: '', headers: {
            'Content-Type': 'application/json'
        }
    })

    return baseApi;
}

export default baseApi