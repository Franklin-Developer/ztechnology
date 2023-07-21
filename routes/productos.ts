import { Router } from "express";
import { consulProductos, consulProductosById, deleteProductos, saveProductos, updateProductos } from "../controllers/productos";

const routerProductos = Router();

routerProductos.get ('/consulProductos',consulProductos);
routerProductos.get ('/consulProductosById/:id',consulProductosById);
routerProductos.post('/saveProductos',saveProductos);
routerProductos.put('/updateProductos',updateProductos);
routerProductos.delete('/deleteProductos/:id', deleteProductos);

routerProductos.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerProductos;