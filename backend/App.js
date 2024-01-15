const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 4000;
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');

var bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.urlencoded());

// uploads 디렉토리가 없으면 생성
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// 객체 정의
const sendMail = require('./routes/mail');
const storage = multer.diskStorage({
  destination(req, file, done) {
    done(null, 'uploads/');
  },
  filename(req, file, done) {
    const ext = path.extname(file.originalname);
    done(null, `${Date.now()}${ext}`);
  },
});

const fileFilter = (req, file, done) => {
  // .osm 파일만 업로드를 허용
  if (file.mimetype === 'application/octet-stream' && path.extname(file.originalname) === '.osm') {
    done(null, true);
  } else {
    done(new Error('Only .osm files are allowed!'), false);
  }
};

const limits = { fileSize: 500 * 1024 * 1024 }; // 500MB

const multerConfig = {
  storage,
  limits,
  fileFilter,
};

const upload = multer(multerConfig);

// 라우트
app.get('/', (req, res) => {
  console.log(`홈화면을 출력합니다.`)
  res.render('home')
  //res.render('home')
  console.log(`홈화면을 출력완료했습니다.`)
})

app.get('/notice', (req, res) => {
  res.render('notice')
})

app.get('/howToUse', (req, res) => {
  res.render('howToUse')
})

app.get('/simulation', (req, res) => {
  res.render('simulation')
})

// multer를 사용하여 다중 필드를 처리하는 설정
app.post('/simulationOrder', upload.fields([{ name: 'file', maxCount: 1 }]), (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('파일이 업로드되지 않았습니다.');
  }

  const simulationData = {
    name: req.body.name,
    email: req.body.email,
    memo: req.body.memo,
    fileName: req.files.file[0].filename
  };

  res.render('simulationOrder', { simulationData });
})

const send = require('./routes/mail');

app.post('/sendMail', async (req, res) => {
  try {
    // 메일 전송 로직
    await sendMail({
      // 메일 내용 설정
      to: req.body.email, // 예시
      subject: '메일 제목',
      text
        : '메일 내용'
    });
    res.json({ message: '메일이 성공적으로 전송되었습니다.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '메일 전송 중 오류가 발생했습니다.' });
  }
});

app.listen(port, () => {
  console.log(`서버가 실행되었습니다. 접속주소 : http://localhost: ${port}`)
})

