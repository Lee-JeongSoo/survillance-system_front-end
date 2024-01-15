const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 4000;
const multer =require('multer');
const path = require('path');
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');

var bodyParser = require('body-parser')

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(express.urlencoded());

// uploads 디렉토리가 없으면 생성
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

// 객체 정의
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
app.get('/',(req,res)=> {
    console.log(`홈화면을 출력합니다.`)
    res.render('home')
    //res.render('home')
    console.log(`홈화면을 출력완료했습니다.`)
})

app.get('/notice',(req,res)=> {
  res.render('notice')
})

app.get('/howToUse',(req,res)=> {
  res.render('howToUse')
})

app.get('/simulation',(req,res)=> {
  res.render('simulation')
})

// multer를 사용하여 다중 필드를 처리하는 설정
app.post('/simulationOrder', upload.fields([{ name: 'file', maxCount: 1 }]), (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('파일이 업로드되지 않았습니다.');
    }

    const name = req.body.name;
    const email = req.body.email;
    const memo = req.body.memo;
    const uploadedFile = req.files.file[0];
  var  a = `시뮬레이션 의뢰 정보를 확인해주세요! / 이름 : ${name} / 이메일 : ${email} / 메모 : ${memo} / 업로드된 파일: ${uploadedFile.filename} `;
  res.send(a);
})

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('파일이 업로드되지 않았습니다.');
    }
    console.log(`업로드된 파일: ${req.file.filename}`);
    res.send(`파일이 업로드되었습니다: ${req.file.filename}`);
});


app.listen(port,()=>{
    console.log(`서버가 실행되었습니다. 접속주소 : http://localhost: ${port}`)
})

