import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom'
import DetailPage from './pages/Detail';
import Dashboard from './pages/Admin/Dashboard';


/*
  B1: Cài đặt thư viện react-router-dom
  B2: wrap toàn bộ ứng dụng bằng component <BrowserRouter>
  B3: Tạo các route bằng component <Route>
  B4: wrap toàn bộ router bằng component <Routes>
*/

function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products={products} />} />
        <Route path='/detail/:id' element={<DetailPage />} />

        <Route path='/admin' element={<Dashboard />} />
      </Routes>

    </>
  )
}

export default App
