import { Router } from "express";
import { consulUsers, consulUsersById, deleteUsers, saveUsers, updateUsers } from "../controllers/usuarios";



const routerUsers = Router();

routerUsers.get ('/consulUsers',consulUsers);
routerUsers.get ('/consulUsersByid/:id',consulUsersById);
routerUsers.post('/saveUsers',saveUsers);
routerUsers.put('/updateUsers',updateUsers);
routerUsers.delete('/deleteUsers/:id', deleteUsers);

routerUsers.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerUsers;

