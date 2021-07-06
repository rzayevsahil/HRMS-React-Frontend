import axios from "axios";

export default class JobPositionService{

    getall(){
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }

    add(jobPosition){
        return axios.post("http://localhost:8080/api/jobpositions/add",jobPosition)
    }

    update(jobPosition){
        return axios.put("http://localhost:8080/api/jobpositions/update",jobPosition)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/jobpositions/delete?id="+id)
    }

    getById(id){
        return axios.delete("http://localhost:8080/api/jobpositions/getbyid?id="+id)
    }

    countGetAll(){
        return axios.get("http://localhost:8080/api/jobpositions/countGetAll");
    }
}