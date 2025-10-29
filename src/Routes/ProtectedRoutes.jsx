import { authContext } from '@/context/AuthContext'
import React, { use, useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const ProtectedRoutes = () => {
    const { isAuth,userData } =  useContext(authContext)
    const navigate =  useNavigate()
    useEffect(() => {
        const getToken = async () => {
            try {
                 const auth = await isAuth()
            if (!auth) {
                navigate("/login")
                toast.error("Please login to access this page")
                return
            }
            } catch (error) {
                console.log(error);
            }
           
        }
        getToken()
    },[])
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default ProtectedRoutes