import axios from "axios"

export default class SkillForCvService{

    getall(){
        return axios.get("http://localhost:8080/api/skills/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/skills/getbyid?id="+id)
    }

    getAllByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/skills/getAllByJobSeekerId?id="+id)
    }

    add(skillForCv){
        return axios.post("http://localhost:8080/api/skills/add",skillForCv)
    }

    update(skillForCv){
        return axios.put("http://localhost:8080/api/skills/update",skillForCv)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/links/delete?id="+id)
    }
    
}