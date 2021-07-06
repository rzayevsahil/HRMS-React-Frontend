import axios from 'axios'


export default class EmployeeService{

    getEmployers(){
        return axios.get("http://localhost:8080/api/employees/getall");
    }

    countGetAll(){
        return axios.get("http://localhost:8080/api/employees/countGetAll");
    }

    update(employee){
        return axios.put("http://localhost:8080/api/employees/update",employee);
    }

    getById(id){
        return axios.get("http://localhost:8080/api/employees/getbyid?id="+id);
    }
}