import axios from 'axios'


let base = 'http://localhost:3000'

export const ProjectMenu = {
  get: (params) => {
    return axios.get(`${base}/api/projectmenu/getProjectMenu`, params).then(res => res.data)
  },
  post: (params) =>{
    return axios.post(`${base}/api/projectmenu/postProjectMenu`, params).then(res => res.data)
  }
}
