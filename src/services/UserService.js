import axios from "axios"

export class UserService {
    static serverURL = `https://jsonplaceholder.typicode.com/users`;
   

    static getAllUsers() {
        let dataURL = `${this.serverURL}/`
        return axios.get(dataURL)
    }

    static getUser(userId) {
        let dataURL = `${this.serverURL}/${userId}`
        return axios.get(dataURL)
    }

    static createUser(user) {
        let dataURL = `https://jsonplaceholder.typicode.com/posts/`
        axios
        .post(dataURL, {
            body: user,
        })
        .then(response => {
            // console.log(response)
            return "Status " + response.status + " Post created";
            
        })
        .catch(err => console.error(err));
    }

    static updateUser(user, userId) {
        let dataURL = `https://jsonplaceholder.typicode.com/posts/${userId}`
        
        return axios.put(dataURL, user)
    }

    
    static deleteUser(userId) {
        let dataURL = `${this.serverURL}/users/${userId}`
        return axios.delete(dataURL)
    }
}