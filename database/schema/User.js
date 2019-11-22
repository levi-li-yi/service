const mongoose = require('mongoose') // 引入mongoose
const Schema = mongoose.Schema // 声明schema
let ObjectId = Schema.Types.ObjectID // 声明Object类型

// 创建用户schema
const userSchema = new Schema({
    UserId: ObjectId,
    userName: {unique: true, type: String},
    password: String,
    createAt: {type: Date, default: Date.now()},
    lastLoginAt: {type: Date, default: Date.now()}
})

// 发布模型
mongoose.model('User', userSchema)