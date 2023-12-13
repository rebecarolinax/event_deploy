import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children, redirectTo = "/"}) => {
    //verifica se esta autenticado
   const isAuthenticated = localStorage.getItem("token") !== null;
   
    //retornar o componente ou navegar para home
    return isAuthenticated ? children : <Navigate to={redirectTo}/>
};