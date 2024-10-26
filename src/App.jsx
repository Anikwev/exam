import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './assets/Pages/LoginPage'
import RegistrationPage from './assets/Pages/RegistrationPage'
import { ToastContainer } from 'react-toastify'
import LayoutOne from './assets/Layout/LayoutOne'
import ResetPassword from './assets/Pages/ResetPassword'
import Home from './assets/Pages/Home'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
        </Route>
      </Route>
    )
  )

  return (   
    <>
    <ToastContainer/>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App