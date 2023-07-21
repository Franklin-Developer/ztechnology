import { Router } from "express";
import { consulCotizaciones, consulCotizacionesById, deleteCotizaciones, saveCotizaciones, updateCotizaciones } from "../controllers/cotizaciones";

const routerCotizaciones = Router();

routerCotizaciones.get ('/consulCotizaciones',consulCotizaciones);
routerCotizaciones.get ('/consulCotizacionesById/:id',consulCotizacionesById);
routerCotizaciones.post('/saveCotizaciones',saveCotizaciones);
routerCotizaciones.put('/updateCotizaciones',updateCotizaciones);
routerCotizaciones.delete('/deleteCotizaciones/:id', deleteCotizaciones);

routerCotizaciones.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerCotizaciones;



