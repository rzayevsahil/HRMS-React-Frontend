import axios from "axios";

export default class JobSeekerService{

    getall(){
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobseekers/getbyid?id="+id)
    }

    getJobseekerCVById(id){
        return axios.get("http://localhost:8080/api/jobseekers/getJobseekerCVById?id="+id)
    }

    add(jobSeeker){
        return axios.post("http://localhost:8080/api/jobseekers/add",jobSeeker)
    }

    update(jobSeeker){
        return axios.put("http://localhost:8080/api/jobseekers/update",jobSeeker)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/jobseekers/delete?id=",id)
    }

    getJobseekerByNationalId(id){
        return axios.get("http://localhost:8080/api/jobseekers/getJobseekerByNationalId?id="+id)
    }

    countGetAll(){
        return axios.get("http://localhost:8080/api/jobseekers/countGetAll");
    }

}