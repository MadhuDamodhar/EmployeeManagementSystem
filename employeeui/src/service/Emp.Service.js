import axios from 'axios';
const BASE_URL='http://localhost:9191/api/v1';

class Service{
empSave(emp){
  return axios.post(BASE_URL+"/add",emp);
}

getAllEmp(){
  return axios.get(BASE_URL+'/fetch');
}

getEmpById(id){
  return axios.get(BASE_URL+'/fetch/'+id);
}

deleteEmpById(id){
  return axios.get(BASE_URL+'/delete/'+id);
}

updateEmp(id,emp){
  return axios.post(BASE_URL+"/update/"+id,emp);
}

}export default new Service();