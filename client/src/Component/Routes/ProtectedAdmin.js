import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const ProtectedAdmin = ({ isAuth, role, component: Component, ...rest }) => {
     return (
          <Route
               {...rest}
               render={() => {
                    if(isAuth && role === 'admin') {
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


export default ProtectedAdmin