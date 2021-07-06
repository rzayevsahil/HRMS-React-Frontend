import axios from "axios";

export default class VerificationEmployerService {

  add(values) {
    return axios.post("http://localhost:8080/api/verificationemployer/add", values);
  }
  delete(id) {
    return axios.post("http://localhost:8080/api/verificationemployer/delete?id="+id);
  }

  getAll() {
    return axios.get("http://localhost:8080/api/verificationemployer/getall");
  }

  getAllByVerifyFalse() {
    return axios.get("http://localhost:8080/api/verificationemployer/getAllByVerifyFalse");
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/verificationemployer/getbyid?id="+id);
  }

  changeVerificationEmployerStatus(id) {
    return axios.post("http://localhost:8080/api/verificationemployer/changeverificationemployerstatus?id="+id);
}
  
}
