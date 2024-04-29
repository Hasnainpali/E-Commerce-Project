import React,{useState} from 'react'

export default function Signin() {
    const [email,setEmail]= useState();
    const [passowrd,setPassword]= useState()

    const login =(e)=>{
        e.preventDefault()
        console.log()
        
      }
  return (
    <div>
       <div className='container-fluid '>
             <h1 className=''>Sign In</h1>

             <div className='inputField'>
              <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}required />
              <input type="password" placeholder='Password' value={passowrd} onChange={(e)=>setPassword(e.target.value)} required />
              <li className='ml-3 mb-3'>Password must be 8 character</li>
             </div>
             
               <button id='signup' onClick={login} className=' btn btn-primary '>Login</button>
              
              
         </div>
    </div>
  )
}
