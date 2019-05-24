const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        console.log(req.body)
        console.log('does this fire')
        const { username, password } = req.body
        console.log(username, password)
        const {session} = req
        const db = req.app.get('db')

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        let newUser = await db.register({username, hash})
        console.log(111111111111, username, hash)
        user = newUser[0]
        if(user){
            return res.status(418).send('username already exists')
        }

        session.user = user
        res.status(200).send(session.user)
    }
}