import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom'
import DetailPage from './pages/Detail';


/*
  B1: Cài đặt thư viện react-router-dom
  B2: wrap toàn bộ ứng dụng bằng component <BrowserRouter>
  B3: Tạo các route bằng component <Route>
  B4: wrap toàn bộ router bằng component <Routes>
*/
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>

    </>
  )
}

export default App
