import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const Context = createContext(null)


export function UserProvider({ children }) {

     const [isAuth, setIsAuth] = useState(false)
     const [role, setRole] = useState('')

     useEffect(()=> {
          axios.get('http://localhost:7000').then((response) => {
               console.log(response.data)
               setIsAuth(response.data.isAuthenticated)
               setRole(response.data.role)
          })
          .catch(err => { console.log(err) })
     }, [])


     return (
          <>
               <Context.Provider value={{isAuth: isAuth, role: role}}>
                    {children}
               </Context.Provider>
          </>
     )
}