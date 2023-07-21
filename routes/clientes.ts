import { Router } from "express";
import { consulClient, consulClientById, deleteClientes, saveClient, updateClientes } from "../controllers/clientes";

const routerClientes = Router();

routerClientes.get ('/consulClient',consulClient);
routerClientes.get ('/consulClientById/:id',consulClientById);
routerClientes.post('/saveClient',saveClient);
routerClientes.put('/updateClientes',updateClientes);
routerClientes.delete('/deleteClientes/:id', deleteClientes);

routerClientes.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerClientes;

