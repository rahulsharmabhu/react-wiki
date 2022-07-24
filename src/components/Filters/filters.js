import React from 'react'
import Gender from './Category/gender';
import Species from './Category/species'; 
import Status from './Category/status'; 


const filters = () => {
  return (
    <div className="col-md-3">
      <div className="text-center fw-bold fs-4 mb-4">
       Filters
      </div>
      <div style={{cursor : "pointer"}} className="text-center text-decoration-underline text-primary">Clear Filter</div>
      <div className="accordion" id="accordionExample">
     
      <Status/>
      <Species/>
      <Gender/>
      
</div>
    </div>
  )
}

export default filters