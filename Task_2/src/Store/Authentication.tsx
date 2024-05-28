import { createContext } from "react";

interface AuthdataType{
    isAuthenticated:string|null,
    AuthToken:string|null,
    setAuthenticatoin:(isAuthenticated:string,token:string)=>void;
}

const AuthenticationContext = createContext<AuthdataType | null>(null)

export default AuthenticationContext;