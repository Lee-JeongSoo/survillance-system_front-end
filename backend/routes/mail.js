const nodemailer = require('nodemailer'); // 설치한 nodemailer 사용
const senderInfo = require('../config/senderInfo.json');
// sender 정보는 config\senderInfo.json에 작성함

const email ={
    "host": "smtp.gmail.com",       //mail 보내는 호스트
    "port":587,
    "secure":false,
    "auth":{
        "user": senderInfo.user,
        "pass": senderInfo.pass
    }
}

//비동기 방식으로 메일 전송

const sendMail = async (data) => {
    try {
        let transporter = nodemailer.createTransport(email);
        let info = await transporter.sendMail(data);
        console.log(info);
        return info.response;
    } catch (error) {
        console.log(error);
        throw error; // 오류 발생시 throw를 통해 상위로 전파
    }
};


const content = {
    from: senderInfo.user,
    to: senderInfo.receiver_user,      // 임시로 지정
    subject: "지능형 융합보안 시뮬레이션 시스템",
    //text: "임시 내용입니다."
    html: "<h2>지능형 융합보안 시뮬레이션 시스템 테스트를 위한 메일 전송</h2>"
}

sendMail(content);