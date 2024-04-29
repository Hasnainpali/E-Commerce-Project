import React, { useState } from 'react';
import './Sign.css'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [firstName,setFirstName]= useState();
  const [LastName,setLastName]= useState();
  const [phone, setPhone] = useState()
  const [email,setEmail]= useState();
  const [passowrd,setPassword]= useState()

  const navigate = useNavigate()

  const register =(e)=>{
    e.preventDefault()
    console.log()
    
    navigate('/Signin')
     
  }

  return (
    <div>
         <div className='container-fluid '>
             <h1 className=''>Register Here</h1>

             <div className='inputField'>
              <input type="text" placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}required />
              <input type="text" placeholder='Last Name' value={LastName} onChange={(e)=>setLastName(e.target.value)}required/>
              <input type="number" placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}required />
              <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}required />
              <input type="password" placeholder='Password' value={passowrd} onChange={(e)=>setPassword(e.target.value)} required />
              <li className='ml-3 mb-3'>Password must be 8 character</li>
             </div>
             
               <button id='signup' onClick={register} className=' btn btn-primary '>Register</button>
              
              
         </div>
    </div>
  )
}
