const Assign = require('../models/assign')
const Ticket = require('../models/tecket')
const User= require('../models/user');
const jwt = require('jsonwebtoken')


exports.getAssignedTicket = (req, res, next) => {

    Assign.find({technicien_id: res.currentUser._id})
    .populate('ticket_id user_id')
    .then(data => {
         return res.json(data)
    })
    
    

}
exports.resolvedTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findOne({ _id: req.params.id });
        if (!ticket) return res.status(404).json('Ticket not found');
        const assign = new Assign({
            ticket_id: req.params.id,
            technicien_id: res.currentUser._id
        })
        const updateEtat = await Ticket.findByIdAndUpdate({ _id: req.params.id }, { status: 'resolved' });
        const assigned = await assign.save()
        if (assigned && updateEtat) return res.status(201).json([{ assign }, { updateEtat }])
    } catch (error) {
        throw Error(error)
    }
}

exports.refuseTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findOne({ _id: req.params.id });
        if (!ticket) return res.status(404).json('Ticket not found');
        const assign = new Assign({
            ticket_id: req.params.id,
            technicien_id: res.currentUser._id
        })
        const updateEtat = await Ticket.findByIdAndUpdate({ _id: req.params.id }, { status: 're-waiting' });
        const assigned = await assign.save()
        if (assigned && updateEtat) return res.status(201).json([{ assign }, { updateEtat }])
    } catch (error) {
        throw Error(error)
    }
}

