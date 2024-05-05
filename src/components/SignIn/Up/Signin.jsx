import React,{useEffect, useState} from 'react'
import { useContext } from 'react';
import { UserContext } from '../../Context Api/UserAuthContext';

export default function Signin() {
  const {setisHeaderFooter} = useContext(UserContext)
    const [email,setEmail]= useState();
    const [passowrd,setPassword]= useState()

    const login =(e)=>{
        e.preventDefault()
        console.log()
      }
      useEffect(()=>{
        setisHeaderFooter(false)
      })
  return (
   <section id='jumbotron' className="d-flex justify-content-center align-items-center vh-100 ">
     <div className='content'>
       <div className='container-fluid shadow-lg'>
       <h1 className='text-center fs-2 text-primary mb-4'>E-commerce Shop</h1>
             <h4 className='mb-4 weight'>Sign In</h4>

             <div className='inputField'>
              <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}required />
              <input type="password" placeholder='Password' value={passowrd} onChange={(e)=>setPassword(e.target.value)} required />
              <div>
                 <a href='#' className='text mb-2'>Forgot Password?</a>
              </div>
             </div>
               <button id='signup' onClick={login} className=' btn btn-primary '>Login</button>
               <div className=" d-flex mt-3 justify-content-center align-items-center">
                 <span className='text-dark'>Not Register?
                   <a href='/signup' className='text '>Sign Up</a>
                 </span>
               </div>
              
              
         </div>
    </div>
   </section>
  )
}
