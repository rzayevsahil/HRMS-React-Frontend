import axios from "axios";

export default class FavoriteService{ 

    add(favorite){
        return axios.post("http://localhost:8080/api/favorites/add",favorite)
    }

    delete(jobSeekerId,jobAdvertId){
        return axios.delete("http://localhost:8080/api/favorites/delete?jobAdvertId="+jobAdvertId+"&jobSeekerId="+jobSeekerId)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/favorites/getById?id="+id)
    }

    getByJobAdvertId(jobAdvertId){
        return axios.get("http://localhost:8080/api/favorites/getByJobAdvertId?id="+jobAdvertId)
    }

    getByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/favorites/getByJobSeekerId?id="+jobSeekerId)
    }

    countGetAll(){
        return axios.get("http://localhost:8080/api/favorites/countGetAll");
    }

    getByJobSeekerIdAndJobAdvertId(jobSeekerId,jobAdvertId){
        return axios.get("http://localhost:8080/api/favorites/getByJobSeekerIdAndJobAdvertId?jobAdvertId="+jobAdvertId+"&jobSeekerId="+jobSeekerId);
    }
}