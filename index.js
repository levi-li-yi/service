const Koa = require('koa');
const app = new Koa();

const mongoose = require('mongoose');
const {connect, initShcemas} = require('./database/init.js');

const bodyParser = require('koa-bodyparser');

const cors = require('koa2-cors');

const router = require('./router/index.js')

app.use(router.routes());
app.use(router.allowedMethods());

// bodyParser
app.use(bodyParser());

// cors跨域
app.use(cors());

app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})
/*;(async () => {
    await connect()
    initShcemas()
    const User = mongoose.model('User')
    let oneUser = new User({userName: 'mack', password: '123456'})
    oneUser.save().then(() => {
        console.log('插入成功')
    })
    let  users = await  User.findOne({}).exec()
    console.log('------------------')
    //console.log(users)
    console.log('------------------')
})()*/
