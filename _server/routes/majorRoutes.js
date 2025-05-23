module.exports = (app) => {
    const router = app.Router()

    router.get('/major', async (req, res) => {
        const majorData = await major.findAll({
            attributes:("id", "name"),
        })
        
        return res.status(200).json({
            massage: 'major data founded',
            data: majorData
        })

    })
    return router
}