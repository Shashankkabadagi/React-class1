import React, { useState } from 'react'

const Homepage = (props) => {
    const{name}=props
    const[islogin,setislogin]=useState(false)
  
    const isloggedin=
        <div>
            <p>log in to view profile</p>
            <button className='border-2 bg-slate-500 h-8 w-14' onClick={()=>setislogin(true)}>login</button>
        </div>
    
  
    const islogedout=
        <div>
            <p>hi {name} how are you</p>
            <button className='border-2 bg-slate-500 h-8 w-14' onClick={()=>setislogin(false)}>logout</button>
        </div>
    

    return (
    <div>
      {
         islogin===true ? islogedout : isloggedin
      }
      
    </div>
  )
}

export default Homepage
