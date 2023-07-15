// import { useState } from 'react'
import {React,useState} from 'react'
import  { Axios } from 'axios'
import "./Home.css"

const Form = () => {
    const url ="http://127.0.0.1:8000"
    const [data,setData]= useState({
        title:"",
        text: "",
        subject:"",
        date:""
    })
    function submit(e){
         e.preventDefault();
         Axios.post(url,{
            title:data.title,
            text:data.title,
            subject:data.subject,
            date:data.date
         })
             .then(res=>{
                console.log(res.data)
             })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]= e.target.value
        setData(newdata);
        console.log(newdata)

    }
  return (
    <>
    <form onSubmit={(e)=> submit(e)} action="post" >
        <label  >Title</label><br />
        <input className='input_box' onChange={(e)=>handle(e)} id="name" value={data.name} type="text"  /> <br /><br />
        <label >Text</label><br />
        <input className='input_box' onChange={(e)=>handle(e)} id="text" value={data.text} type="text"  /> <br /><br />
        <label>Subject</label><br /> 
        <input className='input_box' onChange={(e)=>handle(e)} id="subject" value={data.subject} type="text"  /> <br /><br />
        <label >Date</label><br />
        <input className='input_box' onChange={(e)=>handle(e)} id="date" value={data.date} type="date"  /> <br /><br />
        <button className='btn_box' type='submit'   >Predict</button>
    </form>
      
    </>
  )
}

export default Form
