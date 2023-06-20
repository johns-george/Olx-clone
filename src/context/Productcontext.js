import { createContext,useState } from "react";

export const Prodcontext=createContext(null);

 function Productcont({children}){

    const [postdetails,setpostdetails]=useState()
     return(
     <Prodcontext.Provider value={{postdetails,setpostdetails}}>
            {children}
     </Prodcontext.Provider>
)
}
export default Productcont