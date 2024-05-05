import React, { useEffect, useState } from 'react';
import './Sign.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../Context Api/UserAuthContext';


export default function Signup() {
  const {setisHeaderFooter} = useContext(UserContext)
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

  useEffect(()=>{
    setisHeaderFooter(false)
  })
  return (
   <section id='jumbotron' className="d-flex justify-content-center align-items-center vh-100">
     <div className='content'>
         <div className='container-fluid shadow-lg'>
         <h1 className='text-center fs-2 text-primary mb-4'>E-commerce Shop</h1>
             <h4 className='mb-4  weight'>Register Here</h4>

             <div className='inputField'>
              <input type="text" placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}required />
              <input type="text" placeholder='Last Name' value={LastName} onChange={(e)=>setLastName(e.target.value)}required/>
              <input type="number" placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}required />
              <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}required />
              <input type="password" placeholder='Password' value={passowrd} onChange={(e)=>setPassword(e.target.value)} required />
             </div>
               <button id='signup' onClick={register} className=' btn btn-primary mt-2 '>Register</button>
               <div className=" d-flex mt-3 justify-content-center align-items-center">
                 <span className='text-dark'>Already at Account?
                   <a href='/signin' className='text '>Sign in</a>
                 </span>
               </div>
              
         </div>
    </div>
   </section>
  )
}
