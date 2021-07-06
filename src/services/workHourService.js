import axios from "axios";


export default class WorkHourService{

    getWorkHours(){
        return axios.get("http://localhost:8080/api/workhours/getall")
    }
    add(values){
        return axios.post("http://localhost:8080/api/workhours/add",values)
    }
}