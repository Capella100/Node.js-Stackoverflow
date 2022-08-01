const postModel = require('../models/post');
const { post } = require('../routes/Post');

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
        const posts = await postModel.find();
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
    try {
        await postModel.create({
            title: req.body.title,
            Content: req.body.Content
        });
        res.json({
            status: "successful",
            message: "post created",
        })
    } catch (error) {
        res.json({
            status: "error",
            err: error
        })
    }
}

const updateById = async (req, res, next) => {
    // try {
    //     let found = postModel.find((post) => {
    //         return post.id === parseInt(req.params.parcelId)
    //     });
    //     if (found) {

    //     }
    // } catch (error) {

    // }

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