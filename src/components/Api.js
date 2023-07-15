// import React, { useState } from 'react'
// import { useNavigate,  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Home/Home.css';
import http from "./lib/http";
// import axios from 'axios' 


const Home = () => {
//   const [data, setData] = useState(null)
//   const [print, setPrint] = useState(false)
//   const axios = require('axios');

// // get api data from backend
//   axios.get('http://127.0.0.1:5000/api')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// // Post api data from backend

// axios.post('http://127.0.0.1:5000/prediction', { name: 'John', age: 25 })
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.error(error);
// });


//   function getData(val) {
//     console.warn(val.target.value)
//     setData(val.target.value)
//     setPrint(false)
//   }

  // const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ title, text, subject, content }) => {
    const payload = {
      title,
      text,
      subject,
      content,
    };
    await http.post('/api/posts', { data: payload });
    // navigate('/');
  };
  return (
    <>
      <div className='home-container'>
        <h3>Enter your news to detect fake or not </h3>
        <hr />

        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="" className=''>Title: </label>
        <input className='input_box' type="text" {...register('title')} />
        <label htmlFor="">Text:  </label>
        <input className='input_box' type="text" {...register('text')} /> <br /><br />
        <label htmlFor="">Subject: </label> 
        <input className='input_box' type="text" {...register('subject')} /> 
        <label htmlFor="">Date: </label>
        <input className='input_box' type="date" {...register('date')} /> <br /><br />
        <button className='btn_box' type='submit'   >Predict</button>
        </form>
        {/* {
          print ?
          
            <h3> Resut are as follow <br />{data}</h3>
            : null
        } */}

      </div>
    </>
  )
}

export default Home
