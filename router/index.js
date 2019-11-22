const Router = require('koa-router');

// 初始化Router
let router = new Router();

// 引入用户接口1
let user = require('../api/user.js');
// 引入文件上传接口
let upload = require('../api/upload.js');

router.use('/user', user.routes());
router.use('/upload', upload.routes());

module.exports = router;