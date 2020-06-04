import * as bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import * as controllers from '../controllers';
import mongoose from 'mongoose';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

class Startup extends Server {

    private readonly SERVER_STARTED = 'Server started on port: ';

    constructor() {
        super(true);
        mongoose.connect('mongodb://localhost:27017/UComparator', { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.set('useFindAndModify', false);
        this.app.use(fileUpload({
            createParentPath: true,
        }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupControllers();
    }

    private setupControllers(): void {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = (controllers as any)[name];
                ctlrInstances.push(new controller());
            }
        }
        super.addControllers(ctlrInstances);
    }

    public start(port: number): void {
        this.app.get('*', (req, res) => {
            res.send(this.SERVER_STARTED + port);
        });
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_STARTED + port);
        });
    }
}

export default Startup;