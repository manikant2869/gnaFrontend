import { createContext , useState } from "react";

export const globalContext = createContext();
function GlobalContext({children}){
    const [userIdentity,setUserIdentity] = useState({auth:false , email:""});

    return(
        <globalContext.Provider value={{userIdentity,setUserIdentity}} >

            {children}
        </globalContext.Provider>
    )

}
export default GlobalContext;