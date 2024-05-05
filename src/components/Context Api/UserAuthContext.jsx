import React,{createContext,useState} from "react";

export const UserContext = createContext();

export const UserProvide = ({children}) =>{
    const [isHeaderFooter,setisHeaderFooter]= useState(true);
    const [isLogin, setisLogin] = useState(false)


    return(
        <UserContext.Provider value={{
            isHeaderFooter,
            setisHeaderFooter,
            isLogin,
            setisLogin
         }}>
            {children}
        
        </UserContext.Provider>


    )
}