import mongoose from 'mongoose';

const url = "mongodb://localhost:27017/t_node"
const option = {
    useNewUrlParser: true,
    dbName: "t_node",
}

export const db = mongoose.connect(url,option)