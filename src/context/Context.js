import { Children, createContext,useState } from "react";


export const Firebasecontext=createContext(null);
export const Authcontext=createContext(null);
export default function Authcont({children}){
    const [user,setUser]=useState('')
    return(
<Authcontext.Provider value={{user,setUser}}>
    {children}
</Authcontext.Provider>

)}