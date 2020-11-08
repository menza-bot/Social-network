
import * as axios from 'axios'


//const baseUrl = `https://social-network.samuraijs.com/api/1.0/`


export const axiosInstance = axios.create({  //this tool hepls us to tune our default axios
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '694b4ab8-8917-48c6-9edf-af5966ffc44a'
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => { 
                return response.data
            })
    },
    makeUsersFollowed(userID) {
        return axiosInstance.post(`follow/${userID}`)
    },
    makeUsersUnfollowed(userID) {
        return axiosInstance.delete(`follow/${userID}`)
    }
}


//axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageProps}&count=${this.props.state.usersPage.pageSize}`).then(response => {this.props.setUsers(response.data.items)})
