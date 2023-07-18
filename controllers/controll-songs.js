const Song = require('../models/Song')
module.exports = {
    index: async (req, res) => {
        try {
            const data = await Song.find({})

            return res.status(200).json({ "result": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "result": false, "error": error })
        }
        return res.status(200).json({ "result": true })
    },
    findById: async (req,res)=>{
        const { id } = req.params
        try {
            const data = await Song.findById(id)
            return res.status(200).json({ "state": true, "data": id })
        } catch (error) {
            return res.status(503).json({ "state": false, "error": error })
        }
    },
    save: async (req,res)=>{
        const {id} = req.params
        const song = new Song(req.body)
        return res.status(200).json({ "id": id, "song": song })

        try {
            
        } catch (error) {
            
        }
    }
}