/* eslint-disable react/prop-types */

import { useState } from 'react'
import '../components/style.css' 
 import axios from 'axios'  

const Add_form = ({getData})=>{

      const [name,setName] = useState('')
      const [email,setEmail] = useState('')
      const [phone,setphone] = useState('')
   

    const onHandelSubmit =()=>{
         axios.post('https://659d62ac633f9aee79094fee.mockapi.io/api/p1/user',{
             name:name,
             email:email,
             phone:phone
         }).then(()=>{
              alert('Data added successfully !')
               setName('');setEmail('');setphone('')
               getData()
         })
    }


     return(<>
          <div className='add_form'>
              <h1>Add Data</h1>

              <input type='text' placeholder='name'  value={name}
               onChange={(e)=>setName(e.target.value)}/>

              <input type='email' placeholder='email'  value={email}
              onChange={(e)=>setEmail(e.target.value)}/>

              <input type='text' placeholder='number'  value={phone}
              onChange={(e)=>setphone(e.target.value)}/>

              <button  onClick={onHandelSubmit} >Add Item</button>

          </div>  
     </>)
}

export default Add_form