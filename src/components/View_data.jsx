
import { useEffect, useState } from "react"
import Add_form from './Add_form'
import Update_form from "./Update_form"
 import axios from  'axios'

const View_data = ()=>{
  
   const [data,setData] = useState([])

  
     function  getData() { 
         axios.get(`https://659d62ac633f9aee79094fee.mockapi.io/api/p1/user`).then((res)=>{
            console.log(res.data);
            setData(res.data)
         })
      }
  // delHandler

   const delHandler =(id)=>{
     axios.delete(`https://659d62ac633f9aee79094fee.mockapi.io/api/p1/user/${id}`).then(()=>{
         getData()
         alert("DATA Deleted successfully !")
    
     })
   }

    // updateHandler  
   
     const [myid,setID] = useState("")
     const [u_name,set_u_name] = useState('')
     const [u_email,set_u_email] = useState('')
     const [u_phone,set_u_phone] = useState('')

     const updateHandler = (id)=>{

        axios.get(`https://659d62ac633f9aee79094fee.mockapi.io/api/p1/user/${id}`).then((res)=>{
           console.log(res);
           setID(id)
            set_u_name(res.data.name)
            set_u_email(res.data.email)
            set_u_phone(res.data.phone)
        })

        document.querySelector('.update_form').classList.add('show')

     }



      useEffect(()=>{
        getData()
      },[])


     return(<>
       <Add_form  getData={getData} />
        <div className="view_component">
           <h1>view form</h1>
          <table className="view_table">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
         
         {
            data.map((item)=>(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td><button className="del_btn" onClick={()=>delHandler(item.id)}>Delete</button></td>
          <td><button className="up_btn" onClick={()=>updateHandler(item.id)}>Update</button></td>
        </tr>
            
             ))
         }
     
</table>
        </div>

    <Update_form  id={myid}  u_name={u_name} u_email={u_email} u_phone ={u_phone} 
                  set_u_name={set_u_name} set_u_email={set_u_email} set_u_phone={set_u_phone}
                  getData ={getData}
     
    />
     </>)
}

export default View_data