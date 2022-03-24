const express = require('express');
const cors = require('cors');   

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //Middlewares
        this.middlewares();
        
        //Application routes
        this.routes();
    }

    middlewares(){
        //CORS 
        this.app.use(cors());
        
        //Body reading and parsing 
        this.app.use( express.json());

        //Public directory
        this.app.use(express.static('public') );
    }

    //endpoint
    routes() {
       this.app.use(this.usersPath, require('../routes/user.js'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running in port', this.port);
        });

    }
}

module.exports = Server;