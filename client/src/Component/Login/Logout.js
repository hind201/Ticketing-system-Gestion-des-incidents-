
import React, {useEffect} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


function Logout() {
     useEffect(()=> {
          axios.get('http://localhost:7000/api/logout').then(() => {
               console.log('Logged Out')
          })
     }, [])
     return (
          <>
               <Redirect to="/login" />
          </>
     )
}


export default Logout