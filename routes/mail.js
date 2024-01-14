const nodemailer = require('nodemailer'); // 설치한 nodemailer 사용
const senderInfo = require('../config/senderInfo.json');
// sender 정보는 config\senderInfo.json에 작성함

// 메일발송 객체
const mailSender = {
  // 메일발송 함수
  sendGmail: function (param) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',   // 메일 보내는 곳
      port: 587,
      host: 'smtp.gmlail.com',  
      secure: false,  // port를 465 사용시 true, 나머지는 false
      requireTLS: true ,
      auth: {
        user: senderInfo.user,  // 보내는 메일의 주소
        pass: senderInfo.pass   // 보내는 메일의 비밀번호
      }
    });
    // 메일 옵션
    var mailOptions = {
      from: senderInfo.user, // 보내는 메일의 주소
      to: param.toEmail, // 수신할 이메일
      subject: param.subject, // 메일 제목
      text: param.text // 메일 내용
    };
    
    // 메일 발송    
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  }
}

module.exports = mailSender;

const content = {
    from: senderInfo.user,
    to: "james9758@naver.com",
    subject: "지능형 융합보안 시뮬레이션 시스템",
    text: "임시 내용입니다."
}

mailSender.transporter.sendMail()