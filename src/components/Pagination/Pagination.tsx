import React,{useEffect, useState} from 'react'

type PaginationProps ={
  currentPage:(page:number)=>void,
  page:number,
  pages:number
}

const Pagination = ({currentPage,page,pages}:PaginationProps) => {


const pageNumbers = [...Array(pages).keys()].slice(page >= 3? page-2:page,page+5)




  const decrementPage =() =>{
    if(page >= 2){
      currentPage(--page)
    }
    else{
      currentPage(1)
    }
  }
  
  const incrementPage =() =>{
    if(page <= pages-1){
      currentPage(++page)
    }
    else{
      currentPage(pages)
    }
  }

// useEffect(() => {
//   paginationPage()
// }, [currentPage,page,sort])



  return (
    <div className='flex gap-4  justify-center items-end'>
    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" onClick={decrementPage}>
          <span className="sr-only">Previous</span>
         
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>
      {pageNumbers.map((number,i)=>(
          <button  key={i} aria-current="page" className={`relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 ${page ===number  ? 'bg-[#287bff] text-white':''}  `} onClick={()=>currentPage(number)}>{number}</button>
            
      ))}
       
        <button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" onClick={incrementPage}>
          <span className="sr-only">Next</span>
         
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
    </nav>
        <div className='flex items-center gap-4'>
          <p className='font-bold'>max. pages:{" "}<span className='text-lg'>{pages}</span></p>
        </div>
    </div>
  )
}

export default Pagination