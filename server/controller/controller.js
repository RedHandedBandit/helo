const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        console.log(username, password)
        const {session} = req
        const db = req.app.get('db')

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        let newUser = await db.register({username, hash})
        console.log(111111111111, username, hash)
        user = newUser[0]
        // if(user){
        //     return res.status(418).send('username already exists')
        // }

        session.user = user
        res.status(200).send(session.user)
    },

    login: async (req, res) => {
        const {username, password } = req.body
        const db = req.app.get('db')
        console.log('req.body',username, password)

        const foundUser = await db.login({username})
        const user = foundUser[0]

        if(!user) {
            res.status(418).send('username not found')
        }

        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated) {
            res.status(418).send('wrong password')
        }

        delete user.password

        req.session.user = user
        res.status(200).send(req.session.user)
    }
}