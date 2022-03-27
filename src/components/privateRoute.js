import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLogin } from '../login_status';


const PrivateRoute = ({ component: Component }) => {
   if(isLogin()) return <Component/>;
   return <Redirect to="/login"/>; 
};

export default PrivateRoute;