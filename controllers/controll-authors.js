const Author = require('./../models/Author')

module.exports = {
    index: async (req, res) => {
        try {
            const data = await Author.find({})
            return res.status(200).json({ "state": true, "data": author })
        } catch (error) {
            return res.status(503).json({ "state": false, "error": error })
        }
    },

    findByID: async (req, res) => {
        const { id } = req.params
        try {
            const author = await Author.findById(id)
            return res.status(200).json({ "state": true, "data": id })
        } catch (error) {
            return res.status(503).json({ "state": false, "error": error })
        }
    },

    save: async (req, res) => {

        const author = new Author(req.body)
        console.log('Begind Save')
        try {
            const data = await author.save()

            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {

            return res.status(503).json({ "state": false, "error": error })

        }
        return res.status(200).json({ "state": true, "data": author })
    },

    update: async (req, res) => {
        const { id } = req.params

        const author = req.body
        try {
            const data = await Author.findByIdAndUpdate(id, author)

            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(503).json({ "state": false, "error": error })

        }
    },

    erase: async (req, res) => {
        const { id } = req.params
        const author = req.body

        try {
            const data = await Author.findByIdAndDelete(id)
            
            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(503).json({ "state": false, "error": error })

        }
    }
}