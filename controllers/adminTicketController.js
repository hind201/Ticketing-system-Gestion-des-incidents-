const Ticket = require ('../models/tecket')
const Assign = require('../models/assign')
const User = require('../models/user')

 exports.getTicket = async (req,res)=>{
    try{
     const ticket= await Ticket.find().populate('user_id')
     res.json(ticket)
    }catch (err){
     return res.status(500).json({msg:err.message})
    }
   
}
exports.getOneTicket = (req, res) => {
    const { id } = req.params
    Ticket.findById(id).then(data => {
         return res.json(data)
    })
}


exports.assignTicket = (req, res) => {
    const { user_id, ticket_id, technicien_id} = req.body
    
    new Assign({
        user_id: user_id,
        ticket_id: ticket_id,
        technicien_id: technicien_id,
    })
    .save()
    .then(() => {
         Ticket.findByIdAndUpdate(ticket_id,
            {status:'assigned'}).then(() => {
              res.json({message: 'Ticket is assigned'})
         })
    })

}
exports.getTecketAssigned = (req, res) => {
    Assign.find()
    .populate('user_id ticket_id technicien_id')
    .then(data => {
         return res.json(data)
    })
}
exports.getCloseTicket = (req, res) => {
    Ticket.find({status: 'resolved'}).populate('user_id').then(data => {
         return res.json(data)
    })
} 

exports.getRefusedTicket = (req, res) => {
    Assign.find({status:'re-waiting'})
    .populate('user_id ticket_id technicien_id' )
    .then(data => {
         return res.json(data)
    })
}
exports.getTechnicien = (req, res) => {
    User.find({role:'technicien'}).select('-password')
    .then(data => {
         return res.json(data)
    })
}

