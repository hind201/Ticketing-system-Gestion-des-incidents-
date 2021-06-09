import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedAuth({ isAuth, component: Component, ...rest}) {
     return (
          <Route
               {...rest}
               render={() => !isAuth ? <Component/> : <Redirect to='/login' />}
          />
     )
}

export default ProtectedAuth