// import React,{useContext} from 'react'
// import { Route, Redirect } from 'react-router-dom'
// // import {UserContext} from '/Component/Contextimpo
// import {UserContext} from '../Context'

// const ProtectedAdmin = ({comp: Component, ...rest }) => {
//      const {auth:{isAuth, role}}=useContext(UserContext)
//      return (
//           <Route
//                {...rest}
//                render={() => {
//                     if(isAuth && role === 'admin') {
//                          return <Component/>
//                     } else {
//                          return (
//                               <Redirect to='/login' />
//                          )
//                     }

                   
//                }}
//           />
//      )
// }

// const ProtectedTechnicien = ({comp: Component, ...rest }) => {
//      const {auth:{isAuth, role}}=useContext(UserContext)
//      return (
//           <Route
//                {...rest}
//                render={() => {
//                     if(isAuth && role === 'technicien') {
//                          return <Component/>
//                     } else {
//                          return (
//                               <Redirect to='/login' />
//                          )
//                     }

                   
//                }}
//           />
//      )
// }

// const ProtectedUser = ({comp: Component, ...rest }) => {
//      const {auth:{isAuth, role}}=useContext(UserContext)
//      return (
//           <Route
//                {...rest}
//                render={() => {
//                     if(isAuth && role === 'user') {
//                          return <Component/>
//                     } else {
//                          return (
//                               <Redirect to='/login' />
//                          )
//                     }

                   
//                }}
//           />
//      )
// }


// export default {ProtectedAdmin ,ProtectedTechnicien,ProtectedUser}