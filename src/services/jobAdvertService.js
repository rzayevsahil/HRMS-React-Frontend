import axios from "axios"

export default class JobAdvertService{

    getall(){
        return axios.get("http://localhost:8080/api/jobadverts/getall")
    }

    getByIsActiveTrueOrderByDeadlineAsc(){
        return axios.get("http://localhost:8080/api/jobadverts/getByIsActiveTrueOrderByDeadlineAsc")
    }

    getByisActiveTrueAndEmployerId(id)
    {
        return axios.get("http://localhost:8080/api/jobadverts/getByisActiveTrueAndEmployerId?id="+id)
    }
    
    getJobAdvertDetails(){
        return axios.get("http://localhost:8080/api/jobadverts/getJobAdvertDetails")
    }

    findAllByIsActiveTrue(){
        return axios.get("http://localhost:8080/api/jobadverts/findAllByIsActiveTrue")
    }
    
    add(jobAdvert){
        return axios.post("http://localhost:8080/api/jobadverts/Add",jobAdvert)
    }

    update(jobAdvert){
        return axios.put("http://localhost:8080/api/jobadverts/update",jobAdvert)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/jobadverts/delete?id=",id)
    }

    changeActiveStatus(id){
        return axios.post("http://localhost:8080/api/jobadverts/changeactivestatus?id="+id)
        
    }
    changeOpenStatus(id){
        return axios.post("http://localhost:8080/api/jobadverts/changeopenstatus?id="+id)
    }

    getAllActiveTrueAndOpenTrueJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getAllActiveAndOpenJobAdverts")
    }

    getAllByEmployerId(employerId){
        return axios.get("http://localhost:8080/api/jobadverts/getAllByEmployerId?id="+employerId)
    }

    getAllActiveFalseAndOpenTrueJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getAllOpenJobAdvertsAndIsActiveFalse")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobadverts/getbyid?id="+id)
    }

    getAllPagination(id){
        return axios.get("http://localhost:8080/api/jobadverts/getAllPagination?pageNo="+id)
    }

    countGetAll(){
        return axios.get("http://localhost:8080/api/jobadverts/countGetAll");
    }

}
    