import axios from "axios";

export default class EmployerService{
    
    getAll(){
        return axios.get("http://localhost:8080/api/employers/getAll")
    }

    Add(employer){
        return axios.post("http://localhost:8080/api/employers/Add",employer)
    }

    Update(employer){
        return axios.put("http://localhost:8080/api/employers/Update",employer)
    }

    Delete(employerId){
        return axios.delete("http://localhost:8080/api/employers/Delete?employerId="+employerId)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/employers/getbyid?id="+id)
    }

    getAllByVerify() {
        return axios.get("http://localhost:8080/api/employers/getallbyverify");
    }
    
    changeVerifiedStatus(id) {
        return axios.post("http://localhost:8080/api/employers/changeverifiedstatus?id="+id);
    }
    
    countGetAll(){
        return axios.get("http://localhost:8080/api/employers/countGetAll");
    }

}