// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require('express')
const cors = require('cors')
// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express()
const port = 5000
// 3000 포트로 서버 오픈
app.listen(port, ()=> {
    console.log(`start node server at http://localhost:${port}`)
})

// 이제 터미널에 node app.js 를 입력해보자.

// request 와 response 라는 인자를 줘서 콜백 함수를 만든다.
// localhost:3000 브라우저에 res.send() 내부의 문자열이 띄워진다.

let cors_origin = [`http://localhost:3000`]
app.use(
    cors({
        origin: cors_origin,
        credentials: true,
    })
)
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//db
//var db = require('./db.js');

app.use('/api', require('./routes/api'))

