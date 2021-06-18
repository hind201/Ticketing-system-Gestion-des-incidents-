const express = require('express');
const router = express.Router();
const {register,login,signout}=require('../controllers/userController')
const {creatTicket,getTicketUser,updateTicket,deleteTicket }=require('../controllers/userTicketController')
const {getTicket,assignTicket,getTecketAssigned,getOneTicket,getCloseTicket,getRefusedTicket,getTechnicien}=require('../controllers/adminTicketController')
const {getAssignedTicket ,resolvedTicket,refuseTicket}=require('../controllers/techTicketController')

const {auth}=require('../middlewares/auth')



router.post('/register', register)
router.post('/login',login)
router.get('/signout',signout)
router.post('/creatTicket', auth('user'),creatTicket)
router.get('/getTicketUser',getTicketUser)
router.post('/updateTicket/:id',updateTicket)
router.delete('/deleteTicket/:id',deleteTicket)
//admin
router.get('/getTicket',getTicket)
router.post('/assignTicket',assignTicket)
 router.get('/getTecketAssigned',getTecketAssigned)
 router.get('/getOneTicket/:id',getOneTicket)
 router.get('/getCloseTicket',getCloseTicket)
 router.get('/getRefusedTicket',getRefusedTicket)
 router.get('/getTechnicien',getTechnicien)

//technicien
router.get('/getAssignedTicket',auth('technicien'),getAssignedTicket)
router.post('/resolvedTicket/:id', auth('technicien'), resolvedTicket);
router.post('/refuseTicket/:id', auth('technicien'), refuseTicket);




module.exports= router;