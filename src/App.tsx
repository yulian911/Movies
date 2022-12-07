import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail/Detail'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { useAppSelector } from './hooks/hooks'

const App = () => {
  const {darkTheme} =useAppSelector(state =>state)


  return (
    <div className={`${darkTheme.theme ? "dark" :""} `}>
      <div className='dark:bg-red-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20  '>
         <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path=":id" element={<Detail />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App