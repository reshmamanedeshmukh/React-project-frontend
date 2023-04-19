import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component"
import Swal from 'sweetalert2';
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

 const [employees, setEmployees]=useState([])
 const [employee, setEmployee] = useState(EmployeeService.getAllEmployees());
 const columns = [
  {
    name:"Employee Id",
    selector: (row) =>row.id,
   
  },
  {
    name:"Employee Name",
    selector: (row) => row.name,
    sortable:true
   },
   {
    name:"Employee DOJ",
      selector: (row) => row.dOJ,
    },
     {
     name :"Employee TotalExp",
      selector: (row) =>row.totalExp,
      },
      {
      name:"Employee Designation",
      selector: (row) =>row.designation,
      },
      {
      name:"Employee Skills",
      selector:(row) =>row.skills,
       },
       {
        name:"Action",
        cell:(row) =><button className='btn btn-danger' onClick={()=>handleDelete(row.id)} style={{marginLeft:"10px"}}> Delete</button>

         },

];
 useEffect(()=>{
    getAllEmployees();
    }, [])

    const getAllEmployees=()=>{
      EmployeeService.getAllEmployees().then((response) =>
      {
         setEmployees(response.data)
         console.log(response.data)
      }).catch(error =>{ console.log(error);})
    }

  //  const deleteEmployee = (employeeId) => {
  //    EmployeeService.deleteEmployee(employeeId).then((response)=>{
  //      getAllEmployees();
  //    }).catch(error =>{
  //     console.log(error);
  //    })
  //   }
     const handleDelete = (id)=> {
      Swal.fire({
          icon: 'warning',
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
      }).then(result => {
        if (result.value) {
          EmployeeService.deleteEmployee(id).then((response)=>{
                 getAllEmployees();
               }).catch(error =>{
                console.log(error);
               })
          Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: "data has been deleted.",
              showConfirmButton: false,
              timer: 1500,
          });

          setEmployee( getAllEmployees());
      }
  });
}
  return <div> 
  <DataTable title="Employee List"
   columns={columns}
    data={employees} 
    fixedHeader
    fixedHeaderScrollHeight='450px'
    selectableRows
    selectableRowsHighlight
    highlightOnHover
    pagination/>
    </div>
     
}

export default ListEmployeeComponent