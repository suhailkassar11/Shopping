import React, { useEffect, useState } from 'react'
import {useAuth} from '../../context/data/authContext';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
const AdminPrivate = () => {
    const [ok, setOk] = useState(false);
    const {auth,setAuth}= useAuth();
  
    useEffect(() => {
      const authCheck = async () => {
        const res = await axios.get(`${import.meta.env.VITE_APP_API}/api/auth/admin-auth`);
        console.log(res.data)
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      };
      if (auth?.user?.token) authCheck();
    }, [auth?.user?.token]);
  
    return ok ? <Outlet/> : "spinner";
}

export default AdminPrivate
