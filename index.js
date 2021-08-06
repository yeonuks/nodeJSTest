const express = require('express') //express모듈 가져오기
const app = express()   //express 함수사용하여 app생성
const port = 3000

//mongoose를 이용하여 mongoDB 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yeonuk:<password>@boilerplate.zmh0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log(err))

//root 디렉토리에 hello world 출력
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})