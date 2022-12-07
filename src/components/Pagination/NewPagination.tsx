import React,{useState} from 'react'
import ReactPaginate from 'react-paginate';

type PaginationProps ={
  currentPage:(page:number)=>void,
  page:number,
  pages:number
}


const NewPagination = ({pages,currentPage}:PaginationProps) => {
  const [perPage, setPerPage] = useState(20)
  const handlePageClick = ({selected}:any) => {
    console.log(selected)
    currentPage(selected)
  };

  return (
    <div>
      <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pages}
          previousLabel="< previous"
          containerClassName='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
       />
  </div>
  )
}

export default NewPagination