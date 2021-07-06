import axios from "axios";

export default  class CoverLetterForCvService{

    getall(){
        return axios.get("http://localhost:8080/api/coverletters/getall")
    }

    add(coverLetter){
        return axios.post("http://localhost:8080/api/citcoverlettersies/add")
    }

    update(coverLetter){
        return axios.put("http://localhost:8080/api/coverletters/update",coverLetter)
    }

    delete(coverLetterId){
        return axios.delete("http://localhost:8080/api/coverletters/delete?id=1"+coverLetterId)
    }

    getById(coverLetterId){
        return axios.get("http://localhost:8080/api/coverletters/getById?id="+coverLetterId)
    }
}