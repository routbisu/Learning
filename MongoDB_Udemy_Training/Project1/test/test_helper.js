const mongoose = require('mongoose');
mongoose.connect('mongodb://root:Baadi%402018@ds251727.mlab.com:51727/training', {
    useMongoClient: true
});
mongoose.connection
        .once('open', () => console.log('Connected'))
        .on('error', (error) => {
            console.warn('Warning ', error);
        });

beforeEach((done) => {
    mongoose.connection.collections.users.drop(_ => {
        // Ready to do next operation
        done();
    });
});