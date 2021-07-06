import axios from "axios";

export default class CityService{

    getall(){
        return axios.get("http://localhost:8080/api/cities/getall")
    }

    add(city){
        return axios.post("http://localhost:8080/api/cities/add",city)
    }

    update(city){
        return axios.put("http://localhost:8080/api/cities/update",city)
    }

    delete(cityId){
        return axios.delete("http://localhost:8080/api/cities/delete?cityId="+cityId)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/cities/getbyid?id="+id)
    }

    countGetAll(){
        return axios.get("http://localhost:8080/api/cities/countGetAll");
    }
}