"use client"
import { redirect } from "next/navigation";
import { useSelector } from 'react-redux';
import { useEffect } from "react";

const PrivateRoute = (WrappedComponent, allowedRoles = []) => {
  const Wrapper = (props) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const role = useSelector((state) => state.auth.role);

    // Periksa apakah pengguna terautentikasi dan memiliki peran yang sesuai
    const isAllowed = isAuthenticated && allowedRoles.includes(role);

    // Jika tidak terautentikasi, arahkan ke halaman login
    useEffect(() => {
      if (!isAuthenticated) {
        redirect('/login');
      }
    }, [isAuthenticated]);

    // Jika tidak diizinkan, arahkan ke halaman yang sesuai dengan peran
    useEffect(() => {
      if (isAuthenticated && !isAllowed) {
        if (role === 1) {
          // Jika admin mengakses halaman cashier, arahkan ke halaman admin
          redirect('/admin');
        } else if (role === 2) {
          // Jika cashier mengakses halaman admin, arahkan ke halaman cashier
          redirect('/cashier');
        }
      }
    }, [isAuthenticated, isAllowed, role]);

    // Render komponen terbungkus jika diizinkan, jika tidak, tampilkan null
    return isAllowed ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default PrivateRoute;
