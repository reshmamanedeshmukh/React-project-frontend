import React, { useEffect, useState } from 'react'
import {Link, useNavigate,useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {
 
  
  const[name,setName]=useState('')
  const[dOJ,setDOJ]=useState('')
  const[totalExp,setTotalExp]=useState('')
  const[designation,setDesignation]=useState('')
  const[skills,setSkills]=useState('')
  const navigate = useNavigate();
  const {id}=useParams();


  const saveOrUpdateemployee =(e)=>
  {
    e.preventDefault();

    const employee={name,dOJ,totalExp,designation,skills}
    if(id)
    {
       EmployeeService.updateEmployee(id,employee).then((response)=>{
        navigate("/employees", {replace: true});
       }).catch(error =>{
        console.log(error);
       })
    }
    else{
    EmployeeService.saveEmployee(employee).then((response)=>{
      console.log(response.data)

      navigate("/employees", {replace: true});

    }).catch(error =>{
      console.log(error)
    })
  }
  }

    useEffect(()=>{
        EmployeeService.getEmployeeId(id).then((response)=>{
            setName(response.data.name)
            setDOJ(response.data.dOJ)
            setTotalExp(response.data.totalExp)
            setDesignation(response.data.designation)
            setSkills(response.data.skills)

        }).catch((error)=>{
          console.log(error);
        })
    },[])

   const title=()=>{

      if(id)
      {
        return<h3 className='text-center'>update Employee</h3>
      }else{
        return<h3 className='text-center'>Add Employee</h3>
      }
    }
    return (
    <div> 
     <div className='container'>
        <div className='row'>
          <div className='card col-md-5 offset-md-3 offset-md-3'>
        {
          title()
        }
         <div className='card-body'>
          <form>
                     <div className='form-group mb-2'>
          <label className='form-label'>Employee name:</label>
          <input type="text"
          placeholder='Enter Employee name'
          name='name'
          className='form-control'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          >
             </input>
           </div>
           <div className='form-group mb-2'>
          <label className='form-label'>Employee DOJ:</label>
          <input type="date"
          placeholder='Enter Employee DOJ'
          name='dOJ'
          className='form-control'
          value={dOJ}
          onChange={(e)=>setDOJ(e.target.value)}
          >
             </input>
           </div>
           <div className='form-group mb-2'>
          <label className='form-label'>Employee TotalExp:</label>
          <input type="text"
          placeholder='Enter Employee Total experience'
          name='totalExp'
          className='form-control'
          value={totalExp}
          onChange={(e)=>setTotalExp(e.target.value)}
          >
             </input>
           </div>
           <div className='form-group mb-2'>
          <label className='form-label'>Employee Designation:</label>
          <input type="text"
          placeholder='Enter employee designation'
          name='designation'
          className='form-control'
          value={designation}
          onChange={(e)=>setDesignation(e.target.value)}
          >
             </input>
           </div>
           <div className='form-group mb-2'>
          <label className='form-label'>Employee Skills:</label>
          <input type="text"
          placeholder='Enter employee skills'
          name='skills'
          className='form-control'
          value={skills}
          onChange={(e)=>setSkills(e.target.value)}
          >
             </input>
           </div>

           <button className='btn btn-success' onClick={(e)=>saveOrUpdateemployee(e)}>submit</button>
          <Link to="/employees" className='btn btn-danger'>Cancel</Link>
          </form>

         </div>




          </div>



        </div>
     </div>

    </div>
  )
}

export default AddEmployeeComponent