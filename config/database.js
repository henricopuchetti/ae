const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://henrico:henrico100905@fiaptecnico.jm5sh.mongodb.net/2emia-1tri')
}

module.exports = conn