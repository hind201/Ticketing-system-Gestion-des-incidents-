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
       
        ticket_id: ticket_id,
        technicien_id: technicien_id
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
    Assign.find({status:'re-waiting'})
    .populate('ticket_id user_id technicien_id')
    .then(data => {
         return res.json(data)
    })
}
// exports.assignTicket = async (req, res) => {
//     try {
//         const { technicien_id, ticket_id} = req.body;
//         console.log('req body', req.body)
//         const technicien = await User.findOne({  _id: technicien_id })
//         const findTicket = await Assign.findOne({ _id: ticket_id }).populate('ticket_id');
//         console.log('find ticket', findTicket)

//         if (findTicket === null) {
//             const assign = new Assign({
//                 ticket_id: ticket_id,
//                 technicien_id: technicien._id
//             })
//             const updated = await Ticket.findByIdAndUpdate({ _id: ticket_id }, { etat: 'assigned' });
//             const assigned = await assign.save()
//             if (assigned && updated) return res.status(201).json(assign)
//         } else {
//             if (findTicket.ticket_id._id == ticket_id &&
//                 findTicket.id_technicien == (technicien._id).toString() &&
//                 (findTicket.ticket_id.etat == 'assigned' || findTicket.ticket_id.etat == 're-assigned')) {
//                 return res.status(400).json(`ticket already assigned to ${technicien. id_technicien }`)
//             }
//             const assign = new Assign({
//                 ticket_id : ticket_id,
//                 id_technicien: technicien._id
//             })
//             if (findTicket.ticket_id.etat == 'waiting') {
//                 await Ticket.findByIdAndUpdate({ _id: ticket_id }, { etat: 'assigned' });

//             }
//             if (findTicket.ticket_id.etat == 're-waiting') {
//                 await Ticket.findByIdAndUpdate({ _id: ticket_id }, { etat: 're-assigned' });
//             }
//             const assigned = await assign.save()
//             if (assigned) return res.status(201).json(assign)
//         }
//     } catch (error) {
//         throw Error(error)
//     }

// }

