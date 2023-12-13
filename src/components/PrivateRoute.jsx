"use client"
import { redirect } from "next/navigation";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

const PrivateRoute = (WrappedComponent, allowedRoles = []) => {
  const Wrapper = (props) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const role = useSelector((state) => state.auth.role);
    
    const token = useSelector((state) => state.auth.data);
    try {
      jwt_decode(token);
    } catch (error) {
      console.log(error);
      redirect("/login");
    }

    // Periksa apakah pengguna terautentikasi dan memiliki peran yang sesuai
    const isAllowed = isAuthenticated && allowedRoles.includes(role);
    
    useEffect(() => {
      // Jika tidak terautentikasi, arahkan ke halaman login
      if (!isAuthenticated) {
        redirect("/login");
      }

      // Jika tidak diizinkan, arahkan ke halaman yang sesuai dengan peran
      if (isAuthenticated && !isAllowed) {
        if (role === 1) {
          // Jika admin mengakses halaman cashier, arahkan ke halaman admin
          redirect("/admin");
        }
        if (role === 2) {
          // Jika cashier mengakses halaman admin, arahkan ke halaman cashier
          redirect("/cashier");
        }
      }
    }, [isAuthenticated, isAllowed, role]);

    // Render komponen terbungkus jika diizinkan, jika tidak, tampilkan null
    return isAllowed ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default PrivateRoute;
