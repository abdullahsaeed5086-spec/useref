import React, { useState } from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

const [hhh,setHHH]=useState('')

const Junaid = () => {
  return (
    <div>
    

<input type="text " placeholder='search' onChange={(e)=>setHHH(e.target.value)} value={hhh} />
<h1>{hhh}</h1>
<div>
     face book 
<CiFacebook />
you tube
<FaYoutube/>
</div>

    </div>
  )
}

export default Junaid
