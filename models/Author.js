const mongoosee = require('mongoose')

const { Schema } = mongoosee

const AuthorSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true        
    },
    birthay: {
        type: Date,
        required: false
    },
    song: [
        {
            type: Schema.Types.ObjectId,//alamacena id obejto
            ref: 'song'
        }
    ]

})

module.exports = mongoosee.model('author',AuthorSchema)