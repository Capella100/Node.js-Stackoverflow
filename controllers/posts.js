const postModel = require('../models/user');

const getById = async (req, res, next) => {
    try {
        const post = await postModel.findById(req.params.postId)
        res.json({
            status: "success",
            message: "post found!!",
            data: {
                post
            }
        })
    } catch (error) {
        res.json({
            status: "error",
            err: error
        })

    }

}

const getAll = async (req, res, next) => {
    try {
        const posts = postModel.find();
        res.json({
            status: "success",
            message: "post found!!",
            data: {
                posts
            }
        })
    } catch (error) {
        res.json({
            status: "error",
            err: error
        })

    }

}

const create = async (req, res, next) => {

}

const updateById = async (req, res, next) => {

}

const deleteById = async (req, res, next) => {

}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}