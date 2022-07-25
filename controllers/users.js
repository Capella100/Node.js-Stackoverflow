const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const create = async (req, res, next) => {
    try {
        const newUser = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.josn({
            Status: 'success',
            message: "User added successful"
        })
    } catch (error) {
        console.log(error)
    }
}

const authenticate = async (req, res, next) => {
    const foundUser = await UserModel.findOne({
        email: req.body.email,
    })
    if (foundUser) {
        const isValidPassword = bcrypt.compareSync(req.body.password, foundUser.password);
        if (isValidPassword) {
            const token = jwt.sign({
                id: foundUser._id
            }, 'secretkey', {
                expiresIn: '1h'
            });
            res.josn({
                status: "success",
                message: "User found",
                data: {
                    user: foundUser,
                    token
                }
            })
        } else {
            res.josn({
                status: 'error',
                message: "invalid email and password"
            })
        }

    } else {
        res.josn({
            status: 'error',
            message: "invalid email and password"
        })
    }
}

module.exports = {
    create,
    authenticate
}