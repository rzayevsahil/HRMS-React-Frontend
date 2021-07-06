import axios from "axios"

export default class LinkForCvService{

    getall(){
        return axios.get("http://localhost:8080/api/links/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/links/getById?id="+id)
    }

    getAllByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/links/getAllByJobSeekerId?id="+id)
    }

    add(linkForCv){
        return axios.post("http://localhost:8080/api/links/add",linkForCv)
    }

    update(linkForCv){
        return axios.put("http://localhost:8080/api/links/update",linkForCv)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/links/delete?id="+id)
    }
    
}