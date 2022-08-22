const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "fb8067589ebb98",
        pass: "c644d92bbad4be"
    }
};

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option,(error, info) => {
        if(error) {
            console.log(error);
        }
        else{
            console.log(info);
        }
    });
};

let email_data = {
    from: "rhffpa23@gmail.com",
    to: "rhffpa23@gmail.com",
    subject: "테스트 메일",
    text: "nodejs 한시간만에 끝내기"
}

send(email_data);