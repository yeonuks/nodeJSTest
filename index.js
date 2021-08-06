const express = require('express') //express모듈 가져오기
const app = express()   //express 함수사용하여 app생성
const port = 3000

const bodyParser = require("body-parser");
const{ User } = require("./models/User");


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());

//mongoose를 이용하여 mongoDB 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yeonuk:<password>@boilerplate.zmh0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log(err))

//root 디렉토리에 hello world 출력
app.get('/', (req, res) => {
  res.send('Hello World! ')
})


app.post('/register',(req, res) => {
   //회원가입 시 필요한 정보들을 client에서 가져오면 
   //그것들은 데이터 베이스에 넣어준다.
   const user = new User(req.body)
   user.save((err, userInfo)=>{
     if(err) return res.json({success:false, err})
      return res.status(200).json({
        success:true
      })
   })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})