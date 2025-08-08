import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../component/Login'
import SignUp from '../component/signUp'
import ProtectedRoutes from '../component/ProtectedRoutes'
import ForgotPass from '../pages/ForgotPass'
import ResetPass from '../component/ResetPass'
import LogoutDash from '../pages/logoutDash'
const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoutes>
             <Home />
          </ProtectedRoutes>
         
        )
      },

      {
        path : '/logout',
        element: (
             <LogoutDash/>
        )
      },
     
    ]
  },



  ,
  // authentication
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },

  // // forget password
   {path:'/forgotPass' , element:<ForgotPass/> },
   {path:'/resetpass/:token' , element:<ResetPass/> }

])

export default router