import React, { useState } from 'react'
import './Home.css';

const Home = () => {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)


  

  function getData(val) {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <>
      <div className='home-container'>
        <h3>Enter your news to detect fake or not </h3>
        <hr />
        <form action="post" >
        <label htmlFor="" c>Title</label><br />
        <input className='input_box' type="text"  /> <br /><br />
        <label htmlFor="">Text</label><br />
        <input className='input_box' type="text"  /> <br /><br />
        <label htmlFor="">Subject</label><br /> 
        <input className='input_box' type="text"  /> <br /><br />
        <label htmlFor="">Date</label><br />
        <input className='input_box' type="date"  /> <br /><br />
        <button className='btn_box' type='submit'   >Predict</button>
        </form>
        {
          print ?
          
            <h3> Resut are as follow <br />{data}</h3>
            : null
        }

      </div>
    </>
  )
}

export default Home
