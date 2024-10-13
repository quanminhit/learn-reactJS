const userRouter = require('./userRouter');
const init = (app) => {
    app.use('/user', userRouter)
}
module.exports = init