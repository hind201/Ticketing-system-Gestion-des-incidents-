import React ,{useState, useContext} from 'react'

import axios from 'axios'
import {AuthContext} from  '../contexts/AuthContext'

const  AddTickets=(props)=> {


    const userId = useContext(AuthContext)

    const initialState = {title:'', description:'', type:'', priority:'', status:'', userId }
        //Create a new Ticket
    const [ticket, setTicket] = useState(initialState)

    const [errorMessage, setErrorMessage]= useState('');

    //hundle inpute change

    const onChange = (e) =>{
        setTicket({
            ...ticket,
            [e.target.name] : e.target.value

        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            // call api
            const id = await axios.post('http://localhost:3000/api/creatTicket', ticket, {withCredentials: true})

            //Redirect to list all ticket 
            if(id) props.history.push('/ticket')
            //set error message
            

        } catch (error) {
            setErrorMessage(error.response.data.message)
        }
    }
        return (
            <>
            <form action="" name='addTicket' onSubmit={handleSubmit}>
            <div>
                <input type="text" name='title' placeholder='Add ticket' onChange={onChange} />
     
            </div>
            <div>
                <input type="text" name='description' placeholder='Add description' onChange={onChange} />
     
            </div>
            <div>
                <input type="text" name='priority' placeholder='Add priority' onChange={onChange} />
     
            </div>
            <div>
                <input type="text" name='status' placeholder='Add status' onChange={onChange} />
     
            </div>
            {errorMessage && <p className="alert alert-danger" role="alert">{errorMessage}</p>}
            <div>
                <input type="submit" value='submit' onChange={onChange} />
     
            </div>
            </form>

            </>            
        )
    }


export default   AddTickets