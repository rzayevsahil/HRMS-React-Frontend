import axios from 'axios'

export default class AuthService{

    registerEmployer(employer,confirmPassword){
        return axios.post("http://localhost:8080/api/auth/registerEmployer?confirmPassword="+confirmPassword,employer)
    }

    registerJobseeker(jobseeker,confirmPassword){
        return axios.post("http://localhost:8080/api/auth/registerJobseeker?confirmPassword="+confirmPassword,jobseeker)
    }
}