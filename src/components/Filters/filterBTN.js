import React from 'react'

const filterBTN = ({name,index,items,task,setPagenumber}) => {
  return (
    <>
    <style jsx>
     {`
     
     .x:checked + label{
       background-color : #0b5ed7;
       color:white;
     }
     input[type="radio"]{
       display:none;
     }`}
    </style>
  <div className="form-check">
  <input 
  onClick={()=>{
    setPagenumber(1);
    task(items)
  }}
  className="form-check-input x" type="radio" 
  name={name}
  id={`${name}-${index}`}
   />
  <label class="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>
 </div>
    </>
  )
}

export default filterBTN