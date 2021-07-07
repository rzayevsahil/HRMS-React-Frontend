import axios from "axios";


export default class UserService{

    getAll(){
        return axios.get("http://localhost:8080/api/users/getall")
    }

    countGetAll(){
        return axios.get("http://localhost:8080/api/users/countGetAll");
    }

    signIn(email,password){
        return axios.get("http://localhost:8080/api/users/signIn?email="+email+"&password="+password);
    }

    findByEmailAndPassword(email,password){
        return axios.get("http://localhost:8080/api/users/findByEmailAndPassword?email="+email+"&password="+password);
    }
    
}