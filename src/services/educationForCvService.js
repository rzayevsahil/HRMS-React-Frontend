import axios from "axios"

export default class EducationForCvService{
    
    getall(){
        return axios.get("http://localhost:8080/api/educations/getall")
    }

    getAllByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/educations/getAllByJobSeekerId?id="+id)
    }

    getAllByJobSeekerIdOrderByGraduationAtDesc(id){
        return axios.get("http://localhost:8080/api/educations/getAllByJobSeekerIdOrderByGraduationAtDesc?id="+id)
    }
    
    getById(id){
        return axios.get("http://localhost:8080/api/educations/getbyid?id="+id)
    }

    add(education){
        return axios.post("http://localhost:8080/api/educations/add",education)
    }

    update(education){
        return axios.put("http://localhost:8080/api/educations/update",education)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/educations/delete?id="+id)
    }
}