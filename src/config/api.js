import axios from 'axios'


let base = 'http://localhost:3000'

export const getProjectMenu = {
  get: (params) => {
    return axios.get(`${base}/api/projectmenu/getProjectMenu`, params).then(res => res.data)
  }
}
