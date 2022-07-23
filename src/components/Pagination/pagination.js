import React from 'react'
import ReactPaginate from 'react-paginate'


const pagination = ({ info,pageNumber,setPagenumber}) => {
  return (
    <ReactPaginate className='pagination justify-content-center gap-4 my-4' nextLabel="Next" previousLabel="Prev"
    previousClassName='btn btn-primary'
    nextClassName='btn btn-primary'
    pageClassName='page-item'
    onPageChange={(data) => {setPagenumber(data.selected +1 )}}
    pageLinkClassName='page-link'
    activeClassName='active'
    forcePage={pageNumber == 1 ? 0 :pageNumber - 1 }
    pageCount={info?.pages}/>
  )
}

export default pagination