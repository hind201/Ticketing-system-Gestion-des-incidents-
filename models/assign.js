const mongoose = require('mongoose')

const assignSchema = new mongoose.Schema({
    
    user_id:{type:mongoose.Schema.Types.ObjectId, ref: 'User'},
    ticket_id: {type:mongoose.Schema.Types.ObjectId, ref: 'Ticket'},
    technicien_id: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
    
    date: {type: Date, 
        default: Date.now}
})
module.exports = mongoose.model('Assign',assignSchema)
