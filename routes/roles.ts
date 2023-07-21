import { Router } from "express";
import { consulRoles, consulRolessById, deleteRoles, saveRoles, updateRoles } from "../controllers/roles";

const routerRoles = Router();

routerRoles.get ('/consulRoles',consulRoles);
routerRoles.get ('/consulRolessById/:id',consulRolessById);
routerRoles.post('/saveRoles',saveRoles);
routerRoles.put('/updateRoles',updateRoles);
routerRoles.delete('/deleteRoles/:id', deleteRoles);

routerRoles.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerRoles;