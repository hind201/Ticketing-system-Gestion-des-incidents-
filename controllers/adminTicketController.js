const Ticket = require ('../models/tecket')
const Assign = require('../models/assign')
const User = require('../models/user')

 exports.getTicket= async (req,res)=>{
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




// UPDATE
// exports.updateTicket=(req,res) => {

//     Ticket.findById(req.params.id)
//         .then(ticket => {
// 	    	ticket.title = req.body.title;
// 	    	ticket.description = req.body.description;
// 	    	ticket.type = req.body.type;
//             ticket.priority = req.body.priority;
// 	    	ticket.status = req.body.status;
	    

//             ticket.save()
//                 .then(() => res.json('Ticket updated'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//     	})
//         .catch(err => res.status(400).json('Error: ' + err));
// };

exports.deleteTicket= (req,res)=>{
    Ticket.findByIdAndDelete(req.params.id)
    .then(ticket => res.json('Ticket deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}
exports.assignTicket = (req, res) => {
    const { user_id, ticket_id, technicien_id} = req.body
    
    new Assign({
        user_id: user_id,
        ticket_id: ticket_id,
        technicien_id: technicien_id,type:'technicien'
    })
    .save()
    .then(() => {
         Ticket.findByIdAndUpdate(ticket_id,{status:'assigned'}).then(() => {
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
    Ticket.find({status:'re-waiting'})
    .populate('user_id' )
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

