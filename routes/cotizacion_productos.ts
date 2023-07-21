import { Router } from "express";
import { consulCotizaciones_Productos
    , consulContizacion_ProductoById
    , deleteCotizacion_Productos, saveCotizacion_Producto
    , updateCotizacion_Productos } from "../controllers/cotizacion_productos";


const routerCotizacion_Productos = Router();

routerCotizacion_Productos.get ('/consulCotizaciones_Productos',consulCotizaciones_Productos);
routerCotizacion_Productos.get ('/consulContizacion_ProductoById/:id',consulContizacion_ProductoById);
routerCotizacion_Productos.post('/saveCotizacion_Producto',saveCotizacion_Producto);
routerCotizacion_Productos.put('/updateCotizacion_Productos',updateCotizacion_Productos);
routerCotizacion_Productos.delete('/deleteCotizacion_Productos/:id', deleteCotizacion_Productos);

routerCotizacion_Productos.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerCotizacion_Productos;