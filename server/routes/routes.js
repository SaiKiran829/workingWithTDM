const userRoutes = require('./users');
const applicationRoutes = require('./applications')




const appRouter = (app, fs) => {

    app.get('/', (req,res) => {
        res.send('welcome to thr development api-server');
    });

    userRoutes(app,fs);
    applicationRoutes(app,fs);
};

module.exports = appRouter;

