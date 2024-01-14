const express = require('express');
const router = express.Router();
const mailer = require('./mail');

router.get('/mail', (req, res) => {
  const { email }  = req.body;

  let emailParam = {
    toEmail: email,     // 수신할 이메일

    subject: '시뮬레이션 결과메일 제목입니다.',   // 메일 제목

    text: `시뮬레이션 결과 메일 내용입니다. `     // 메일 내용
  };

  mailer.sendGmail(emailParam);

  res.status(200).send("성공");
})

module.exports = router;