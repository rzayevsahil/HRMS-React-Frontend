import axios from "axios";

export default class ExperienceForCvService{

    getById(id){
        return axios.get("http://localhost:8080/api/experiences/getbyid?id="+id)
    }

    getAllJobSeekerId(id){
        return axios.get("http://localhost:8080/api/experiences/getAllJobSeekerId?id="+id)
    }

    getAllByJobSeekerIdOrderByLeaveAtDesc(id){
        return axios.get("http://localhost:8080/api/experiences/getAllByJobSeekerIdOrderByLeaveAtDesc?id="+id)
    }

    add(experience){
        return axios.post("http://localhost:8080/api/experiences/add",experience)
    }

    update(experience){
        return axios.put("http://localhost:8080/api/experiences/update",experience)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/experiences/delete?id="+id)
    }
}