import React from 'react'

const pagination = ({pageNumber,setPagenumber}) => {
    let next = () => {
        setPagenumber(x => x+1)
    }
    let prev = () => {
        if(pageNumber === 1) return 
        setPagenumber(x => x-1)
    }
  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
      <button onClick={prev} className='btn btn-primary'>
          Prev
      </button>
      <button onClick={next} className='btn btn-primary'>
          Next
      </button>
    </div>
  )
}

export default pagination