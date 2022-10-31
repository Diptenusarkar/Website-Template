import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'
const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
    },
    blog:{
        type:String,
        required:true
    }
},{timestamps:true});

autoIncrement.initialize(mongoose.connection);
blogSchema.plugin(autoIncrement.plugin,'myBlogs')

const Blog=mongoose.model('myBlogs',blogSchema)
export default Blog;