import axios from "axios"

export default class LanguageForCvService{

    getall(){
        return axios.get("http://localhost:8080/api/languages/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/languages/getbyid?id="+id)
    }

    getAllByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/languages/getAllByJobSeekerId?id="+id)
    }

    add(languageForCv){
        return axios.post("http://localhost:8080/api/languages/add",languageForCv)
    }

    update(languageForCv){
        return axios.put("http://localhost:8080/api/languages/update",languageForCv)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/languages/delete?id="+id)
    }
    
}