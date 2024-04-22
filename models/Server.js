// Importamos express
import express from 'express';
// Importamos nuestro moto de plantilla
import { create } from 'express-handlebars';

// Creación de variables de entorno
import { fileURLToPath } from 'url'
import { dirname } from "path";
// Variables que me permiten mostrar el path donde estoy en el proyecto
const __filename = fileURLToPath( import.meta.url )
const __dirname = dirname( __filename )

// IMPORTAMOS NUESTRAS VISTAS

import vistaHomeRoute from '../routes/vistaHome.routes.js';
//import vistaLoginRoute from '../routes/vistaLogin.routes.js';
//import vistaColoresRoute from '../routes/vistaColores.routes.js';



// Creamos nuestro modelo o clase de servidor

class Server {

    // Vamos a crear nuestro constructor para que ejecute 
    // Middleware
    // Rutas o Routes
    constructor(){
        // Cramos la app  de express
        this.app = express();
        this.port = process.env.PORT || 8000;

        this.frontEndPaths = {
            rootHome:'/'
        }

        // Iniciamos nuestros metodos iniciales
        this.middlewares();
        this.routes()
    }


    middlewares(){
        this.app.use( express.static('public') );
        this.app.use('/css', express.static(`${__dirname}/../public/assets/css`));
        this.app.use('/img', express.static( `${__dirname}/../public/assets/img`));
        // Ruta de CSS para Bootstrap
        this.app.use('/bootstrap', express.static( `${__dirname}/../node_modules/bootstrap/dist/css`));
        this.app.use('/bootstrapjs',express.static(  `${__dirname}/../node_modules/bootstrap/dist/js`  ));
        this.app.use("/jquery", express.static( `${__dirname}/node_modules/jquery/dist`));
    }

    routes(){
        this.app.use( this.frontEndPaths.rootHome , vistaHomeRoute );
    //    this.app.use( this.frontEndPaths.rootLogin, vistaLoginRoute );
    //    this.app.use( this.frontEndPaths.rootLogin, vistaColoresRoute )
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        } )
    }

    initHandelbars(){

        this.hbs = create({
            partialsDir:[
                "views"
            ]
        })

        this.app.engine( "handlebars", this.hbs.engine );
        this.app.set("view engine","handlebars");
        
    }


}

export default Server;