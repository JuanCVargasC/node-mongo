const Author = require('./../models/Author')

module.exports = {
    index: async (req, res) => {
        try {
            const data = await Author.find({}) 
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(503).json({ "state": false, "error": error })
        }
    },

    save: async(req,res)=>{
        console.log('Begind Save')
        const {id,name}= req.body

        return res.status(200).json({"state":true,"data":{"id":id,"name":name}})
    }
}