import React from 'react'
import Gender from './Category/gender';
import Species from './Category/species'; 
import Status from './Category/status'; 


const filters = ({setStatus,setPagenumber,setGender,setSpecies}) => {
  let clear= () => {
    setStatus("");
    setPagenumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div className="col-md-3">
      <div className="text-center fw-bold fs-4 mb-4">
       Filters
      </div>
      <div
      onClick={clear}
      style={{cursor : "pointer"}} className="text-center text-decoration-underline text-primary">Clear Filter</div>
      <div className="accordion" id="accordionExample">
     
      <Status setPagenumber={setPagenumber} setStatus={setStatus}/>
      <Species setSpecies={setSpecies} setPagenumber={setPagenumber}/>
      <Gender setGender={setGender} setPagenumber={setPagenumber}/>
      
</div>
    </div>
  )
}

export default filters