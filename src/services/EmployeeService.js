 import axios from 'axios'

 //const Employee_REST_API_CRL="http://localhost:8080";
 class EmplyeeService
 {
    getAllEmployees()
    {
        return axios.get("http://localhost:8080/get/employee")
    } 
    saveEmployee(employee){
        return axios.post("http://localhost:8080/save/employee",employee)
    }
    getEmployeeId(employeeId){

        return axios.get("http://localhost:8080/getid"+`/`+employeeId);
    }
    updateEmployee(employeeId,employee)
    {
        return axios.put("http://localhost:8080/update"+`/`+employeeId,employee);
    }
    deleteEmployee(employeeId){
     return axios.delete("http://localhost:8080/delete"+`/`+employeeId);
    }
 }
export default new EmplyeeService();