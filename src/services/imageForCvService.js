import axios from "axios";

export default class ImageForCvService{
    
    getall(){
        return axios.get("http://localhost:8080/api/images/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/images/getById?id="+id)
    }

    getByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/images/getByJobSeekerId?id="+id)
    }

    add(jobseekerId,imageFile){
        return axios.post("http://localhost:8080/api/images/add?jobseekerId="+jobseekerId,imageFile)
    }

    update(imageForCv){
        return axios.put("http://localhost:8080/api/images/update",imageForCv)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/images/delete?id="+id)
    }
}