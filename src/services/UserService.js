import axios from "axios"

export class UserService {
    static serverURL = `https://jsonplaceholder.typicode.com/users`;

    static getAllUsers() {
        let dataURL = `${this.serverURL}/`
        return axios.get(dataURL)
    }

    static getUser(userId) {
        let dataURL = `${this.serverURL}/users/${userId}`
        return axios.get(dataURL)
    }

    static createUser(user) {
        let dataURL = `${this.serverURL}/users/`
        return axios.post(dataURL, user)
    }

    static updateUser(user, userId) {
        let dataURL = `${this.serverURL}/users/${userId}`
        return axios.put(dataURL, user)
    }

    
    static deleteUser(userId) {
        let dataURL = `${this.serverURL}/users/${userId}`
        return axios.delete(dataURL)
    }
}