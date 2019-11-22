const Router = require('koa-router');
const router = new Router();

router.post('uploadFile',async(ctx) => {
    console.log(ctx.request.body);
});

module.exports = router;