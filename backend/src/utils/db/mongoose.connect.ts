import mongoose from "mongoose";

export const mongooseConnect = async () => mongoose.connect(
    "mongodb+srv://group22:1234@group22databse.uvtoalh.mongodb.net/group22Database" //{ useNewUrlParser: true, useUnifiedTopology: true }
).then(()=> console.log(`MongoDB Connected Successfully`))
.catch((err)=> console.log(err))