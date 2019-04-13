const nodemailer=require('nodemailer');

class Email{
    constructor(oConfig){
        this.createTransport=nodemailer.createTransport(oConfig);
    } 
    enviarCorreo(oEmail){
        try{
            this.createTransport.sendMail(oEmail, function(error, info){
                this.createTransport.close();
            })
        }
        catch(e){}
    }
}

module.exports=Email;