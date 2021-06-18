
const Ticket = require('../models/tecket')
const User = require('../models/user')


exports.creatTicket =(req,res)=>{
const  {title,description,type,priority,status}= req.body;
const ticket = new Ticket({
  
    title: title,
    description: description,
    type: type,
    priority: priority,
    status:status,
    user_id: res.currentUser._id
    })
    ticket.save((err,ticket)=>{
            if(err){
                return res.status(400).send(err)
               }
               console.log(ticket)
       res.json({ ticket})
    
    })

}




exports.getTicketUser = (req, res) => {
    Ticket.find().populate('user_id').then(data => {
         return res.json(data)
    })
}
//UPDATE
exports.updateTicket=(req,res) => {

    Ticket.findById(req.params.id)
        .then(ticket => {
	    	ticket.title = req.body.title;
	    	ticket.description = req.body.description;
	    	ticket.type = req.body.type;
            ticket.priority = req.body.priority;
	    	ticket.status = req.body.status;
	    

            ticket.save()
                .then(() => res.json('Ticket updated'))
                .catch(err => res.status(400).json('Error: ' + err));
    	})
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.deleteTicket= (req,res)=>{
    Ticket.findByIdAndDelete(req.params.id)
    .then(ticket => res.json('Ticket deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}




