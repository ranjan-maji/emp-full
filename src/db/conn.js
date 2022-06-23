const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ranjan1:TjW1c4znKhEta2UO@cluster0.u4idw.mongodb.net/Emp-api', {

    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
    
}).then(() => {
    console.log('Connection is Successfull')
}).catch((error) => {
    console.log('No Connection', error)
})
    