import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const AbdullahSaeed = () => {
        const [data,setData]=useState([]);
    //  console.log("---",data);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(true);

       const user=useNavigate();

const okAdd=()=>{
  return(
    user('/okAdd')
  )
}

    function GetUser(){
        axios.get('https://681c3df26ae7c794cf711726.mockapi.io/StudentDetails').then((response)=>{
            setData(response?.data)
    }).catch((error)=>{
        setError(true)
    }).finally((loading)=>{
        setLoading(false)
    })
    
    }

 

    useEffect(()=>{
        GetUser();
    })
  return (
    <div>
        <div className='container'>
<div>
    <h1>User Detail</h1>
    </div>
<div>
    <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Search"/>
  <label for="floatingInput">Search</label>
</div>
</div>
<div>
   <button type="button" class="btn btn-primary btn-lg" onClick={()=>okAdd()} >Button</button> 
</div>

</div><hr />





<table className="table table-dark table-striped">
  <thead>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Phone</th>
      <th>Password</th>
    </tr>
  </thead>

  <tbody>
    {data.map((item, index) => (
      <tr key={item.id}>
        <th>{index + 1}</th>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td>{item.password}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default AbdullahSaeed