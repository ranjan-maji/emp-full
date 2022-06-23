const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure:false,
    requireTLS:true,
    auth: {
        user: 'ranjanmaji96@gmail.com',
        pass: '8013046678'
    }
});

const mailOption = {
    from: 'ranjanmaji96@gmail.com',
    to: 'ranjanmaji906@gmail.com',
    subject:'Try Sending Mail in Nodejs',
    test: 'Hello I am Ranjan Maji. i am Backend Developer'
}
transporter.sendMail(mailOption, function(error,info) {
    if(error){
        
        console.log(error)
    }
    else{
        console.log('Email has been sent', info.response)

    }
})