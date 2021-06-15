
import React, { createContext, useState} from "react";


// create context
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  

  const [data, setData] = useState({ isAuth: false, role: "" });
 
   

  return (
    <UserContext.Provider value={{data,setData}}>
      {children}
    </UserContext.Provider>
  );
};


