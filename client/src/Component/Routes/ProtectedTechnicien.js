import React,{useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
// import {UserContext} from '/Component/Contextimpo
import {UserContext} from '../Context'


const ProtectedTechnicien = ({comp: Component, ...rest }) => {
    const {data:{isAuth, role}}=useContext(UserContext)
    return (
         <Route
              {...rest}
              render={() => {
                   if(isAuth && role === 'technicien') {
                        return <Component/>
                   } else {
                        return (
                             <Redirect to='/login' />
                        )
                   }

                  
              }}
         />
    )
}
export default ProtectedTechnicien