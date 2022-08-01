const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user');

const create = async (req, res, next) => {
    try {
        const newUser = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({
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
            res.json({
                status: "success",
                message: "User found",
                data: {
                    user: foundUser,
                    token
                }
            })
        } else {
            res.json({
                status: 'error',
                message: "invalid email and password"
            })
        }

    } else {
        res.json({
            status: 'error',
            message: "invalid email and password"
        })
    }
}

module.exports = {
    create,
    authenticate
}