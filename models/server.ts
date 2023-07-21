import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connections';
import userRoutes from '../routes/users';
import routerCotizaciones from '../routes/cotizaciones';
import ProductsRoutes from '../routes/productos';
import ClientesRoutes from '../routes/clientes';
import routerC_Productos from '../routes/cotizacion_productos';


class Server {
    private app: Application;
    private port: string | undefined;
    private apiPaths = {
        users: '/api/users',
        cotizaciones: '/api/cotizaciones',
        products: '/api/productos',
        clientes: '/api/clientes',
        Cotizacion_productos: '/api/cotiza_productos',
        
        //projects: '/api/projects'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.dbConection();
        this.middlewares();
        this.routes();
    }

    async dbConection() {
        try {
            await db.authenticate();
            console.log('database online');
        } catch (error) {
            console.log(error);
        }
    }

    middlewares() {
        // Lectura y Parseo del body
        this.app.use(express.json());
        // Permite peticiones desde cualquier dominio o servidor
        this.app.use(cors());
        // this.app.use(cors({
        //     origin: 'http://localhost:5173/'
        // }));

        //Configurar la carpeta estatica
        this.app.use('/uploads', express.static('uploads'))
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.products, ProductsRoutes);
        this.app.use(this.apiPaths.cotizaciones, routerCotizaciones);
        this.app.use(this.apiPaths.clientes, ClientesRoutes);
        this.app.use(this.apiPaths.Cotizacion_productos, routerC_Productos);
    }

  

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Se está ejecuntando en el puerto: ${this.port}`);
        })
    }
}

export default Server;