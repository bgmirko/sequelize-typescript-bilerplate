import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models';

app.get('/', async (req, res, next) => {
    const users = await db.User.findAll({
        include: [{ model: db.Project }, { model: db.Like }]
    })
    res.json(users)
})

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App is running on port ${port}`)
    })
}).catch((error) => {
    console.error(error);
});