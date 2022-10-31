import mongoose from 'mongoose';


const connection=async(username,password)=>{
    // const URL='mongodb+srv://anasaliw:fluffy122997@anas.0be97.mongodb.net/user-blogs?retryWrites=true&w=majority'
    const URL=`mongodb://${username}:${password}@anas-shard-00-00.0be97.mongodb.net:27017,anas-shard-00-01.0be97.mongodb.net:27017,anas-shard-00-02.0be97.mongodb.net:27017/my-blogs?ssl=true&replicaSet=atlas-37d5r8-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log('connection to database is successful')
    } catch (error) {
        console.log('Error : '+ error);
    }
}
export default connection;